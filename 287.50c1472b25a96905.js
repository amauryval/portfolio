"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[287],{5287:(Fe,z,r)=>{r.r(z),r.d(z,{MapGtfsViewerModule:()=>R});var Z=r(6895),G=r(2216),O=r(646),p=r(4353),q=r(3171),ee=r(187),te=r(6107),ne=r(2121),v=r(521),V=r(8587),f=r(483),h=r(760),H=r(6003);const oe=class ie extends ne.Z{constructor(t){super(t),this.image_=null}getImage(){return this.image_?this.image_.getImage():null}prepareFrame(t){const n=t.layerStatesArray[t.layerIndex],o=t.pixelRatio,s=t.viewState,a=s.resolution,i=this.getLayer().getSource(),c=t.viewHints;let u=t.extent;if(void 0!==n.extent&&(u=(0,h.Ed)(u,(0,H.dY)(n.extent,s.projection))),!c[V.Z.ANIMATING]&&!c[V.Z.INTERACTING]&&!(0,h.xb)(u))if(i){const g=i.getImage(u,a,o,s.projection);g&&(this.loadImage(g)?this.image_=g:g.getState()===v.Z.EMPTY&&(this.image_=null))}else this.image_=null;return!!this.image_}getData(t){const n=this.frameState;if(!n)return null;const o=this.getLayer(),s=(0,f.nn)(n.pixelToCoordinateTransform,t.slice()),a=o.getExtent();if(a&&!(0,h.b8)(a,s))return null;const i=this.image_.getExtent(),c=this.image_.getImage(),u=(0,h.dz)(i),d=Math.floor(c.width*((s[0]-i[0])/u));if(d<0||d>=c.width)return null;const g=(0,h.Cr)(i),b=Math.floor(c.height*((i[3]-s[1])/g));return b<0||b>=c.height?null:this.getImageData(c,d,b)}renderFrame(t,n){const o=this.image_,s=o.getExtent(),a=o.getResolution(),i=o.getPixelRatio(),c=t.layerStatesArray[t.layerIndex],u=t.pixelRatio,d=t.viewState,g=d.center,k=u*a/(d.resolution*i),C=t.extent,E=d.resolution,T=d.rotation,x=Math.round((0,h.dz)(C)/E*u),w=Math.round((0,h.Cr)(C)/E*u);(0,f.qC)(this.pixelTransform,t.size[0]/2,t.size[1]/2,1/u,1/u,T,-x/2,-w/2),(0,f.nb)(this.inversePixelTransform,this.pixelTransform);const A=(0,f.BB)(this.pixelTransform);this.useContainer(n,A,this.getBackground(t));const m=this.context,L=m.canvas;L.width!=x||L.height!=w?(L.width=x,L.height=w):this.containerReused||m.clearRect(0,0,x,w);let U=!1,P=!0;if(c.extent){const F=(0,H.dY)(c.extent,d.projection);P=(0,h.kK)(F,t.extent),U=P&&!(0,h.r4)(F,t.extent),U&&this.clipUnrotated(m,t,F)}const _=o.getImage(),B=(0,f.qC)(this.tempTransform,x/2,w/2,k,k,0,i*(s[0]-g[0])/a,i*(g[1]-s[3])/a);this.renderedResolution=a*u/i;const K=_.width*B[0],W=_.height*B[3];if(this.getLayer().getSource().getInterpolate()||(m.imageSmoothingEnabled=!1),this.preRender(m,t),P&&K>=.5&&W>=.5){const F=B[4],_e=B[5],N=c.opacity;let X;1!==N&&(X=m.globalAlpha,m.globalAlpha=N),m.drawImage(_,0,0,+_.width,+_.height,F,_e,K,W),1!==N&&(m.globalAlpha=X)}return this.postRender(m,t),U&&m.restore(),m.imageSmoothingEnabled=!0,A!==L.style.transform&&(L.style.transform=A),this.container}};var re=r(5513),J=r(9972),se=r(8007),j=r(119);const le=class ae extends se.Z{constructor(t,n,o,s){super(),this.extent=t,this.pixelRatio_=o,this.resolution=n,this.state=s}changed(){this.dispatchEvent(J.Z.CHANGE)}getExtent(){return this.extent}getImage(){return(0,j.O3)()}getPixelRatio(){return this.pixelRatio_}getResolution(){return this.resolution}getState(){return this.state}load(){(0,j.O3)()}},ue=class ce extends le{constructor(t,n,o,s,a){super(t,n,o,void 0!==a?v.Z.IDLE:v.Z.LOADED),this.loader_=void 0!==a?a:null,this.canvas_=s,this.error_=null}getError(){return this.error_}handleLoad_(t){t?(this.error_=t,this.state=v.Z.ERROR):this.state=v.Z.LOADED,this.changed()}load(){this.state==v.Z.IDLE&&(this.state=v.Z.LOADING,this.changed(),this.loader_(this.handleLoad_.bind(this)))}getImage(){return this.canvas_}};var de=r(2402);const he=class pe extends oe{constructor(t){super(t),this.vectorRenderer_=new re.Z(t),this.layerImageRatio_=t.getImageRatio(),this.coordinateToVectorPixelTransform_=(0,f.Ue)(),this.renderedPixelToCoordinateTransform_=null}disposeInternal(){this.vectorRenderer_.dispose(),super.disposeInternal()}getFeatures(t){if(!this.vectorRenderer_)return new Promise(o=>o([]));const n=(0,f.nn)(this.coordinateToVectorPixelTransform_,(0,f.nn)(this.renderedPixelToCoordinateTransform_,t.slice()));return this.vectorRenderer_.getFeatures(n)}handleFontsChanged(){this.vectorRenderer_.handleFontsChanged()}prepareFrame(t){const n=t.pixelRatio,o=t.viewState,s=o.resolution,a=t.viewHints,i=this.vectorRenderer_;let c=t.extent;1!==this.layerImageRatio_&&(c=c.slice(0),(0,h.H9)(c,this.layerImageRatio_));const u=(0,h.dz)(c)/s,d=(0,h.Cr)(c)/s;if(!a[V.Z.ANIMATING]&&!a[V.Z.INTERACTING]&&!(0,h.xb)(c)){i.useContainer(null,null);const g=i.context,b=t.layerStatesArray[t.layerIndex];g.globalAlpha=b.opacity;const k=Object.assign({},b,{opacity:1}),C=Object.assign({},t,{declutterTree:new de(9),extent:c,size:[u,d],viewState:Object.assign({},t.viewState,{rotation:0}),layerStatesArray:[k],layerIndex:0});let E=!0;const T=new ue(c,s,n,g.canvas,function(x){i.prepareFrame(C)&&i.replayGroupChanged&&(i.clipping=!1,i.renderFrame(C,null)&&(i.renderDeclutter(C),E=!1),x())});T.addEventListener(J.Z.CHANGE,function(){if(T.getState()!==v.Z.LOADED)return;this.image_=E?null:T;const x=T.getResolution(),w=T.getPixelRatio(),A=x*n/w;this.renderedResolution=A,this.coordinateToVectorPixelTransform_=(0,f.qC)(this.coordinateToVectorPixelTransform_,u/2,d/2,1/A,-1/A,0,-o.center[0],-o.center[1])}.bind(this)),T.load()}return this.image_&&(this.renderedPixelToCoordinateTransform_=t.pixelToCoordinateTransform.slice()),!!this.image_}preRender(){}postRender(){}renderDeclutter(){}forEachFeatureAtCoordinate(t,n,o,s,a){return this.vectorRenderer_?this.vectorRenderer_.forEachFeatureAtCoordinate(t,n,o,s,a):super.forEachFeatureAtCoordinate(t,n,o,s,a)}},me=class ge extends te.Z{constructor(t){t=t||{};const n=Object.assign({},t);delete n.imageRatio,super(n),this.imageRatio_=void 0!==t.imageRatio?t.imageRatio:1}getImageRatio(){return this.imageRatio_}createRenderer(){return new he(this)}};var Y=r(5947),e=r(4650),y=r(7579),fe=r(6057),xe=r(529);class D{constructor(t){this.http=t,this.apiUrl=fe.n+"api/v1/gtfs_builder/",this.mapContainer=new y.x,this.screenMapBound=new y.x,this.availableAreas=new y.x,this.availableRouteTypes=new y.x,this.ErrorapiUrlDataApiFound=new y.x,this.GeoData=new y.x,this.rangeDateData=new y.x,this.GeoDataToMap=new y.x}pullGeoData(t,n,o){const s=(0,Z.p6)(n,"yyyy-MM-dd HH:mm:ss","fr_FR");this.http.get(this.apiUrl+t.toLowerCase()+"/moving_nodes_by_date?current_date="+s+"&bounds="+o).subscribe({complete:()=>{},error:a=>{this.ErrorapiUrlDataApiFound.next(a.error.message)},next:a=>{this.GeoData.next(a)}})}pullRangeDateData(t){this.http.get(this.apiUrl+t.toLowerCase()+"/range_dates").subscribe({complete:()=>{},error:n=>{this.ErrorapiUrlDataApiFound.next(n.error.message)},next:n=>{this.rangeDateData.next(n)}})}pullAvailableAreas(){this.http.get(this.apiUrl+"existing_study_areas").subscribe({complete:()=>{},error:t=>{this.ErrorapiUrlDataApiFound.next(t.error.message)},next:t=>{this.availableAreas.next(t)}})}pullAvailableRouteTypes(t){this.http.get(this.apiUrl+t.toLowerCase()+"/route_types").subscribe({complete:()=>{},error:n=>{this.ErrorapiUrlDataApiFound.next(n.error.message)},next:n=>{this.availableRouteTypes.next(n)}})}pullGeoDataToMap(t){this.GeoDataToMap.next(t)}}D.\u0275fac=function(t){return new(t||D)(e.LFG(xe.eN))},D.\u0275prov=e.Yz7({token:D,factory:D.\u0275fac,providedIn:"root"});var ve=r(999),ye=r(1481),be=r(926),$=r(5538),Te=r(9645),De=r(910),we=r(4067),Q=r(9255),Ae=r(9970);function Se(l,t){if(1&l){const n=e.EpF();e.ynx(0),e.TgZ(1,"h6",11),e._uU(2,"Vitesse"),e.qZA(),e.TgZ(3,"div",12)(4,"div",13),e._uU(5,"-"),e.qZA(),e.TgZ(6,"div",14)(7,"input",15),e.NdJ("change",function(s){e.CHM(n);const a=e.oxw();return e.KtG(a.updateStepValue(s))}),e.qZA()(),e.TgZ(8,"div",13),e._uU(9,"+"),e.qZA()(),e.BQk()}if(2&l){const n=e.oxw();e.xp6(7),e.Q6J("min",n.minStepValue)("max",n.maxStepValue)("step",n.minStepValue)("value",n.stepValue)}}class M extends we.g{constructor(){super(),this.sliderHandleTimeStyle=[{from:0,to:7,font_unicode:"\uf186",color:"#4575b4",stroke:"white",description:"La nuit",brightness:60},{from:7,to:11,font_unicode:"\uf185",color:"#fdae61",stroke:"black",description:"Le matin"},{from:11,to:14,font_unicode:"\uf185",color:"#d73027",stroke:"black",description:"Le milieu de journ\xe9e"},{from:14,to:19,font_unicode:"\uf185",color:"#fdae61",stroke:"black",description:"L'apr\xe8s midi"},{from:19,to:24,font_unicode:"\uf186",color:"#4575b4",stroke:"white",description:"Le soir"}]}ngOnDestroy(){this.setMapTileBrightness()}update(t){super.update(t),this.updateHandleTimelineStyleFromTime(t)}updateHandleTimelineStyleFromTime(t){let n=t.getHours(),o=this.sliderHandleTimeStyle.filter(s=>n>=s.from&&n<s.to)[0];Q.Ys("#handle-timeline").style("fill",o.color).style("stroke",o.stroke).style("stroke-width","1px"),this.setMapTileBrightness(n)}setMapTileBrightness(t){Q.td_(".ol-layer").style("filter",typeof t<"u"?`brightness(${this.brightnessValuesAtEachHours[t]})`:"unset")}}function Re(l,t){if(1&l){const n=e.EpF();e.TgZ(0,"button",3),e.NdJ("click",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.zoomOnData())}),e._UZ(1,"fa-icon",4),e.qZA()}if(2&l){const n=e.oxw();e.xp6(1),e.Q6J("icon",n.centerIcon)}}function Ce(l,t){if(1&l){const n=e.EpF();e.ynx(0),e.TgZ(1,"set-button-content",10),e.NdJ("click",function(){const a=e.CHM(n).$implicit,i=e.oxw(2);return e.KtG(i.updateData(a))}),e._uU(2),e.qZA(),e.BQk()}if(2&l){const n=t.$implicit,o=e.oxw(2);e.xp6(1),e.Q6J("classes",o.currentArea===n?"btn-sm btn-warning fw-bold":"btn-sm btn-warning"),e.xp6(1),e.hij("",n.charAt(0).toUpperCase()+n.slice(1)," ")}}function Le(l,t){if(1&l&&(e.O4$(),e.TgZ(0,"g"),e._UZ(1,"circle"),e.TgZ(2,"text",11),e._uU(3),e.qZA()()),2&l){const n=t.$implicit,o=e.oxw(2);e.xp6(1),e.uIk("r",o.routeTypesLegendData.circleR)("cx",o.routeTypesLegendData.circleCxPos)("cy",n.cy)("fill",n.color)("stroke",n.strokeColor),e.xp6(1),e.uIk("x",o.routeTypesLegendData.textXPos)("y",n.cy)("font-size",o.routeTypesLegendData.fontSize),e.xp6(1),e.hij("",n.label," ")}}function Ze(l,t){if(1&l){const n=e.EpF();e.TgZ(0,"div",5)(1,"set-section-container")(2,"h6"),e._uU(3,"GTFS"),e.qZA(),e.TgZ(4,"div",6),e.YNc(5,Ce,3,2,"ng-container",7),e.qZA()(),e.TgZ(6,"set-section-container")(7,"h6"),e._uU(8,"Modes de transport"),e.qZA(),e.O4$(),e.TgZ(9,"svg",8),e.YNc(10,Le,4,9,"g",7),e.qZA()()(),e.kcU(),e.TgZ(11,"set-section-container")(12,"app-time-legend",9),e.NdJ("currentDateEvent",function(s){e.CHM(n);const a=e.oxw();return e.KtG(a.getCurrentDate(s))}),e.qZA()()}if(2&l){const n=e.oxw();e.xp6(5),e.Q6J("ngForOf",n.availableArea),e.xp6(4),e.uIk("viewBox","0 0 "+n.widthLegendElement+" "+n.heightLegendElement),e.xp6(1),e.Q6J("ngForOf",n.routeTypesLegendData.features),e.xp6(2),e.Q6J("timeLineSpeedSliderEnabled",!0)("startDate",n.startDate)("endDate",n.endDate)("currentDate",n.currentDate)("stepValue",n.currentstepValue)}}M.\u0275fac=function(t){return new(t||M)},M.\u0275cmp=e.Xpm({type:M,selectors:[["app-time-legend"]],features:[e.qOj],decls:18,vars:9,consts:[[1,"d-flex","flex-xl-row","flex-column"],["classes","text-bg-secondary"],[1,"d-flex","flex-row","justify-content-center"],[3,"id"],[1,"d-flex","flex-column","justify-content-center","m-2"],[1,"d-flex","flex-row","justify-content-center","align-items-center"],["id","start-button","role","button",1,"btn","btn-sm","btn-dark",3,"click"],[3,"icon"],["id","play-button","role","button",1,"btn","btn-dark","mx-2",3,"click"],["id","end-button","role","button",1,"btn","btn-sm","btn-dark",3,"click"],[4,"ngIf"],[1,"mt-3"],[1,"d-flex","flex-row","align-self-center"],[1,"fw-bold"],[1,"px-1"],["id","speed-slider","type","range",1,"form-range",3,"min","max","step","value","change"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"set-section-container")(2,"h6"),e._uU(3,"Barre Temporelle"),e.qZA(),e.TgZ(4,"set-badge-content",1),e._uU(5),e.ALo(6,"date"),e.qZA(),e.TgZ(7,"div",2),e.O4$(),e._UZ(8,"svg",3),e.qZA()(),e.kcU(),e.TgZ(9,"div",4)(10,"div",5)(11,"a",6),e.NdJ("click",function(){return n.resetTimeLine()}),e._UZ(12,"fa-icon",7),e.qZA(),e.TgZ(13,"a",8),e.NdJ("click",function(){return n.startTimeLine()}),e._uU(14,"Play"),e.qZA(),e.TgZ(15,"a",9),e.NdJ("click",function(){return n.forwardTimeLine()}),e._UZ(16,"fa-icon",7),e.qZA()(),e.YNc(17,Se,10,4,"ng-container",10),e.qZA()()),2&t&&(e.xp6(5),e.Oqu(e.xi3(6,6,n.currentDate,n.currentDateFormat)),e.xp6(3),e.Q6J("id",n.timeLineId),e.uIk("viewBox","0 10 "+n.width+" "+n.height),e.xp6(4),e.Q6J("icon",n.backwardIcon),e.xp6(4),e.Q6J("icon",n.forwardIcon),e.xp6(1),e.Q6J("ngIf",n.timeLineSpeedSliderEnabled))},dependencies:[Z.O5,G.BN,$.d,Ae.H,Z.uU],styles:['.ticks{font-weight:700}.track,.track-inset,.track-overlay{stroke-linecap:round}.track{stroke:#000;stroke-opacity:.3;stroke-width:13px}.track-inset{stroke:#dcdcdc;stroke-width:11px}.track-overlay{pointer-events:stroke;stroke-width:50px;stroke:transparent;cursor:pointer}#handle-timeline{fill:#fff;stroke:#000;stroke-opacity:.5;stroke-width:1.25px}svg #trace{stroke:#6c6c6c;stroke-width:4}#play-button{width:90px}circle.preselected{stroke:#000!important;stroke-width:2px!important}#timeline-slider{width:33em}@media (max-width: 576px){#timeline-slider{width:20em}}#speed-slider{transform:rotate(180deg)}.marker-fontawesome{font-family:"Font Awesome 5 Free";text-anchor:middle;dominant-baseline:middle;pointer-events:none}\n'],encapsulation:2});class I{constructor(t,n,o,s,a){this.dataService=t,this.mapService=n,this.activatedRoute=o,this.titleService=s,this.controlerService=a,this.locationIcon=p.pk,this.tagIcon=p.yK,this.centerIcon=p.HI,this.input_data=[{area:"lyon",default_step_value:4e3,zoom:12,source:"M\xe9tropole de Lyon"},{area:"ter",default_step_value:1500,zoom:6,source:"SNCF"},{area:"toulouse",default_step_value:4e3,zoom:12,source:"Toulouse m\xe9tropole"}],this.widthLegendElement=100,this.heightLegendElement=80,this.heightMoveLegendElement=60,this.routeTypesLegendData={circleR:2*p.X9,circleCxPos:20,fontSize:"12px",circleStrokeColor:p.ue,circleStrokeWidth:p.H,textXPos:35,features:[{dataValue:"0",cy:22,label:"Tram",color:p.yO},{dataValue:"1",cy:44,label:"M\xe9tro",color:p.T7},{dataValue:"2",cy:66,label:"Train",color:p.zy}]},this.previousArea=null,this.currentArea=this.input_data[1].area,this.currentstepValue=this.input_data[1].default_step_value,this.currentZoomValue=this.input_data[1].zoom,this.currentAttributionValue=this.input_data[1].source,this.isGeodataCanBeDisplayed=!1,this.isLegendDisplayed=!0,this.currentRouteTypes=[],this.popupWidth=100,this.popupHeight=100,this.zoomEventSubscription=this.mapService.zoomEvent.subscribe(i=>{this.mapService.zoomToExtent(this.gtfsLayer.getSource().getExtent(),this.currentZoomValue)}),this.mapSubscription=this.mapService.map.subscribe(i=>{this.map=i}),this.screenMapBoundSubscription=this.mapService.screenMapBound.subscribe(i=>{this.dataBoundingBox=i,this.dataService.pullGeoData(this.currentArea,this.currentDate,this.dataBoundingBox)}),this.pullGeoDataToMapSubscription=this.dataService.GeoDataToMap.subscribe(i=>{this.geoFeaturesData=i,this.refreshSourceLayer(i),this.previousArea!==this.currentArea&&(this.mapService.sendZoomAction(),this.previousArea=this.currentArea)}),this.pullAvailableRouteTypeSubscription=this.dataService.availableRouteTypes.subscribe(i=>{this.currentRouteTypes=i}),this.pullBoundingBoxDataSubscription=this.dataService.rangeDateData.subscribe(i=>{this.dataBoundingBox=i.data_bounds,this.startDate=this.parseTime(i.start_date),this.endDate=this.parseTime(i.end_date);const c=new Date;let u=new Date(`${this.startDate.getFullYear()}-${this.startDate.getMonth()+1}-${this.startDate.getDate()} ${c.getHours()}:${c.getMinutes()}:${c.getSeconds()}`);this.currentDate=u<this.startDate?this.startDate:u}),this.pullGeoDataSubscription=this.dataService.GeoData.subscribe(i=>{i.length>0&&this.dataService.pullGeoDataToMap(i)}),this.pullAvailableAreasSubscription=this.dataService.availableAreas.subscribe(i=>{this.availableArea=i})}ngOnInit(){this.sendResumeSubMenus(),this.mapService.changeMapInteractionStatus(!0),this.mapService.getMap(),this.gtfsLayer=this.buildGtfsLayer(p.JB),this.dataService.pullAvailableAreas()}ngAfterViewInit(){this.updateData(this.currentArea)}getCurrentDate(t){this.currentDate=t,this.dataService.pullGeoData(this.currentArea,this.currentDate,this.dataBoundingBox)}sendResumeSubMenus(){this.controlerService.pullSubMenus([]),this.controlerService.pullTitlePage(this.activatedRoute.snapshot.data.title)}ngOnDestroy(){this.mapSubscription.unsubscribe(),this.pullGeoDataToMapSubscription.unsubscribe(),this.pullBoundingBoxDataSubscription.unsubscribe(),this.pullGeoDataSubscription.unsubscribe(),this.zoomEventSubscription.unsubscribe(),this.screenMapBoundSubscription.unsubscribe(),this.pullAvailableAreasSubscription.unsubscribe(),this.pullAvailableRouteTypeSubscription.unsubscribe(),this.mapService.removeLayerByName(p.JB),this.mapService.changeMapInteractionStatus(!1),this.mapService.resetMapView()}zoomOnData(){this.mapService.sendZoomAction()}parseTime(t){return new Date(t)}updateData(t){const n=this.input_data.filter(o=>o.area===t);this.currentArea=t,this.currentstepValue=n[0].default_step_value,this.currentZoomValue=n[0].zoom,this.currentAttributionValue=n[0].source,this.dataService.pullRangeDateData(this.currentArea)}showHideLegend(){this.isLegendDisplayed=!this.isLegendDisplayed}buildGtfsLayer(t){let n=new me({source:new Y.Z({features:[]}),style:p.vi});return n.set("name",t),this.map.addLayer(n),n}refreshSourceLayer(t){let n=new Y.Z({features:[],attributions:this.currentAttributionValue}),o=[];t.forEach((i,c)=>{let u=new q.Z({geometry:new ee.Z([i.x,i.y]).transform("EPSG:4326","EPSG:3857"),route_type:i.route_type,route_long_name:i.route_long_name});o.push(u)}),n.addFeatures(o);const a=this.map.getLayers().getArray().filter(i=>i.get("name")===p.JB);1===a.length&&a[0].setSource(n)}}I.\u0275fac=function(t){return new(t||I)(e.Y36(D),e.Y36(ve.S),e.Y36(O.gz),e.Y36(ye.Dx),e.Y36(be.L))},I.\u0275cmp=e.Xpm({type:I,selectors:[["app-map-view"]],decls:5,vars:0,consts:[["classes","position-fixed"],["buttonsTemplate",""],["controlersTemplate",""],["title","Centrer","type","button","checked","","autocomplete","off",1,"btn","btn-sm","btn-warning","mx-1",3,"click"],[1,"",3,"icon"],[1,"d-flex","flex-row","justify-content-around"],[1,"d-flex","flex-xl-row","flex-column"],[4,"ngFor","ngForOf"],["id","routeTypeLegend"],["timelineDateFormat","hour",3,"timeLineSpeedSliderEnabled","startDate","endDate","currentDate","stepValue","currentDateEvent"],[3,"classes","click"],[1,"label"]],template:function(t,n){1&t&&(e.TgZ(0,"set-legend-container",0),e.YNc(1,Re,2,1,"ng-template",null,1,e.W1O),e.YNc(3,Ze,13,8,"ng-template",null,2,e.W1O),e.qZA())},dependencies:[Z.sg,G.BN,$.d,Te.C,De.b,M],styles:['.legend-content[_ngcontent-%COMP%]{color:"#FFFFF";background-color:#f5f5f5;box-shadow:0 -5px 20px #00000080}.legend-title[_ngcontent-%COMP%]{color:"#FFFFF";background-color:#f5f5f5}.map-popup[_ngcontent-%COMP%]{position:absolute;visibility:hidden;background-color:#f8f8ff;width:350px}svg[_ngcontent-%COMP%]{width:7em}.label[_ngcontent-%COMP%]{text-anchor:start;dominant-baseline:middle}']});const Me=[{path:"",component:I,data:{title:"GTFS viewer",page:"map-gtfs-viewer"},outlet:"map-gtfs-viewer"}];class S{}S.\u0275fac=function(t){return new(t||S)},S.\u0275mod=e.oAB({type:S}),S.\u0275inj=e.cJS({imports:[O.Bz.forChild(Me),O.Bz]});var Ie=r(7328),Ee=r(6852);class R{}R.\u0275fac=function(t){return new(t||R)},R.\u0275mod=e.oAB({type:R}),R.\u0275inj=e.cJS({providers:[D],imports:[Z.ez,S,G.uH,Ie.k,Ee.p]})}}]);