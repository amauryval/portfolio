import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ControlerService } from '@services/controler.service';
import { MapService } from '@services/map.service';

import Map from 'ol/Map';

import { faGlobe, faOutdent, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

import { Subscription } from 'rxjs/internal/Subscription';
import View from 'ol/View';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit, OnDestroy {

  currentEpsg!: string;

  // icons
  geoIcon = faGlobe;
  leftSideIcon = faOutdent;
  layersIcon = faLayerGroup;

  map!: Map;

  defaultMapView!: View;

  isLegendDisplayed = true;
  currentMenuDisplayed = 'geoTools'

  mapSubscription!: Subscription;
  epsgChangesSubscription!: Subscription;

  constructor(
    private mapService: MapService,
    private controlerService: ControlerService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {

    this.mapSubscription = this.mapService.map.subscribe(
      (map: Map) => {
        this.map = map;
        this.currentEpsg = this.map.getView().getProjection().getCode();
        this.defaultMapView = this.map.getView()
      }
    );

   }

  ngOnInit(): void {

    this.sendResumeSubMenus();
    this.mapService.changeMapInteractionStatus(true)
    this.mapService.getMap();

  }



  ngOnDestroy(): void {
    this.map.setView(this.defaultMapView)

    this.mapSubscription.unsubscribe();
    this.epsgChangesSubscription.unsubscribe();

    this.mapService.changeMapInteractionStatus(false)

    this.mapService.resetMapView()

  }



  sendResumeSubMenus(): void {
    this.controlerService.pullSubMenus([]);
    this.controlerService.pullTitlePage(this.activatedRoute.snapshot.data.title);
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title);

  }

  showHideLegend(): void {
    this.isLegendDisplayed = !this.isLegendDisplayed;
  }


}

