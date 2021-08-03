import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';

import { MapService } from '../../services/map.service';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-background-map',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  private InitialViewCoords: any = [44.896741, 4.932861];
  private zoomValue = 8;
  private osmLayer: any = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
    maxZoom: 13,
    minZoom: 8
  });

  isBlurred!: boolean;

  map: any;

  constructor(
    private router: Router,
    private location: Location,
    private mapService: MapService,
  ) {


    // to apply bur
    this.router.events.subscribe(_ => {
      if ( ['/home', '/map'].includes(this.location.path()) ) {
        this.isBlurred = false;
      } else {
        this.isBlurred = true;
      }
    });

    this.mapService.isMapContainerCalled.subscribe(
      (status) => {
        this.mapService.sendMapContainer(this.map);
      },
      (error) => {
        console.log('error');
      }
    );


    this.mapService.isMapViewReset.subscribe(
      (status) => {
        this.resetView();
      },
      (error) => {
        console.log('error');
      }
    );

  }

  ngOnInit(): void {
    this.initMap();

  }

  sendMapContainer(): void {
    this.mapService.sendMapContainer(this.map);
  }

  initMap(): void {
    this.map = L.map('map', {
      center: this.InitialViewCoords,
      zoom: this.zoomValue,
      zoomControl: false,
    }).addLayer(this.osmLayer);

    // to add scale
    // L.control.scale(
    //   {
    //     imperial: false,
    //     position: 'bottomright'
    //   }
    // ).addTo(this.map);
  }

  resetView(): void {
    this.map.setView(
      this.InitialViewCoords,
      this.zoomValue
    )
  }

}
