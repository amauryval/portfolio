import * as d3 from 'd3';





export class TimeLineFromD3 {

  private timeLineId!: string;

  private margin: any = { top: 10, right: 15, bottom: 0, left: 15 };
  private width = 600;
  private height = 90;
  private dateRange!: any;
  private selectedDatePosition = 0;  // TODO check type
  private fontSize = '14px';
  private maxDatePosition: number = this.width - this.margin.left - this.margin.right;
  private sliderDate!: Date | null;
  private movingCursor = false;
  private timer!: any;
  private stepValue = 4000; // 4000 ok with parq
  private timerStep = 25; // 25 ok with parq

  endDate!: Date | null;
  startDate!: Date | null;
  currentDate!: string;

  constructor(timeLineId: string, currentDate: string, startDate: Date | null, endDate: Date | null) {

    // init
    this.timeLineId = timeLineId;
    this.currentDate = currentDate;
    this.endDate = startDate;
    this.startDate = endDate;
  }

  buildTimeline(date: string): void {
    // clean existing slide bar
    d3.selectAll(".slider-bar").remove()

    const svg = d3.select(this.timeLineId);

    const playButton: any = d3.select('#play-button');

    this.initDateRange();

    const slider = svg.append('g')
      .attr('class', 'slider-bar')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.height / 2 + ')');

    // slider bar creation
    slider.append('line')
      .attr('class', 'track')
      .attr('x1', this.dateRange.range()[0])
      .attr('x2', this.dateRange.range()[1])
      .select((d: any, i: any, n: any) => n[i].parentNode.appendChild(n[i].cloneNode(true))) // copying itself
      .attr('class', 'track-inset')
      .select((d: any, i: any, n: any) => n[i].parentNode.appendChild(n[i].cloneNode(true)))  // copying itself
      .attr('class', 'track-overlay')
      .call(d3.drag()
        .on('drag start', (e: any) => {

          // to avoid cursor running if a click is done on the slider bar...
          playButton.text('Pause');
          playButton.dispatch('click')

          this.selectedDatePosition = e.x;
          this.update(this.dateRange.invert(this.selectedDatePosition));

          // disable timeline node selection
          d3.select('#slider-bar .events')
            .selectAll('circle')
            .style('pointer-events', 'none');
        })
        .on('end', (e: any) => {
          // at the drag end we enable the drap map
          // this.mapContainer.dragging.enable();

          // enable timeline node selection
          d3.select('#slider-bar .events')
            .selectAll('circle')
            .style('pointer-events', 'all');

          // reset button play if animation is done and play button == continue
          if (this.startDate !== null && this.endDate !== null) {
            if (this.dateRange.invert(this.selectedDatePosition).toTimeString() === this.endDate.toTimeString()
              || this.dateRange.invert(this.selectedDatePosition).toTimeString() === this.startDate.toTimeString()
            ) {
              playButton.text('Play');
            } else {
              playButton.text('Continue');
            }
          }
      })
    );

    slider.insert('g', '.track-overlay')
      .attr('class', 'ticks')
      .attr('transform', 'translate(0,' + 21 + ')')
      .selectAll('text')
      .data(this.dateRange.ticks(10)) // number of label on the slider
      .enter()
      .append('text')
      .attr('x', this.dateRange)
      .attr('y', 0)
      .style('font-size', this.fontSize)
      .attr('text-anchor', 'middle')
      .text((d: any) => this.formatDateToTimeString(d));

    slider.insert('g', '.track-overlay')
      .attr('class', 'ticks-line')
      .attr('transform', 'translate(0,' + -6 + ')')
      .selectAll('line')
      .data(this.dateRange.ticks(10)) // number of label on the slider
      .enter()
      .append('line')
      .attr('x1', this.dateRange)
      .attr('x2', this.dateRange)
      .attr('y1', 0)
      .attr('y2', 12)
      .style('stroke', 'grey')
      .style('stroke-width', '2px');

    // node trace events from geojson source
    const traceEvents = slider.insert('g', '.track-overlay')
      .attr('class', 'trace-events');

    const trace = slider.insert('line', '.track-overlay')
      .attr('id', 'trace')
      .attr('x1', this.dateRange(this.startDate));

    const handle = slider.insert('circle', '.track-overlay')
      .attr('id', 'handle')
      .attr('r', 10);

    // events
    const events = slider.append('g')
      .attr('class', 'events');

    // update to end date
    this.sliderDate = this.endDate
    this.update(this.endDate);

  };


  private initDateRange(): void {
    if (this.startDate !== null && this.endDate !== null) {
      this.dateRange = d3.scaleTime()
      .domain([this.startDate, this.endDate])
      .range([0, this.maxDatePosition])
      .clamp(true);
    }
  };


  private formatDateToTimeString(time: Date): string {
    return parseInt(d3.timeFormat('%H')(time)) + ' h.';
  };

  private formatDate(time: Date): string {
    return d3.timeFormat('%Y-%m-%d %H:%M:%S')(time);
  };

  update(h: any): void {

    this.currentDate = this.formatDate(h)

    // call api only if last count is different from the current count feature
    if (this.currentDate !== null) {
      console.log("cccc", this.currentDate)
      this.dataService.pullGeoData(
        this.currentData,
        this.currentDate,
        this.screenMapBounds
      );

     // update position and text of label according to slider scale
      d3.select('#trace').attr('x2', this.dateRange(h)); // trace
      d3.select('#handle').attr('cx', this.dateRange(h)); // handle
      this.sliderDate = h
    }
  };

  step(): void {
    this.update(this.dateRange.invert(this.selectedDatePosition));
    this.selectedDatePosition = this.selectedDatePosition + (this.maxDatePosition / this.stepValue);
    if (this.selectedDatePosition > this.maxDatePosition) {
      this.movingCursor = false;
      this.selectedDatePosition = 0;
      clearInterval(this.timer);
      // timer = 0;
      d3.select('#play-button').text('Play');
    }
  };

  startTimeLine(): void {
    const button = d3.select('#play-button');
    if (button.html() === 'Pause') {
      this.movingCursor = false;
      clearInterval(this.timer);
      // var timer = 0;
      button.text('Continue');

    } else if (button.html() === 'Continue') {
      this.movingCursor = true;
      this.timer = setInterval(this.step.bind(this), this.timerStep);
      button.html('Pause');

    } else {
      // start run
      this.movingCursor = true;
      this.timer = setInterval(this.step.bind(this), this.timerStep);
      button.html('Pause');

    }
  }

  resetTimeLine(): void {
    // reset action
    d3.select('#play-button').html('Start');
    // update to start date
    this.sliderDate = this.startDate
    // d3.select('#slider-value').html(this.formatDate(this.startDate));
    this.update(this.startDate);
    this.selectedDatePosition = 0;
    this.movingCursor = false;
    clearInterval(this.timer);
  }

  forwardTimeLine(): void {
    d3.select('#play-button').html('Play');
    // update to start date
    this.sliderDate = this.startDate
    // d3.select('#slider-value').html(this.formatDate(this.endDate));
    this.update(this.endDate);
    this.selectedDatePosition = 0;
    this.movingCursor = false;
    clearInterval(this.timer);
  }

}


