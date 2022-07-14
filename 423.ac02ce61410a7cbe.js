"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[423],{4423:(C,r,n)=>{n.r(r),n.d(r,{MapModule:()=>M});var s=n(9808),u=n(9444),l=n(9560),d=n(2397),m=n(2087),e=n(5e3),g=n(9947),p=n(3686);const h=function(t){return[t]};function f(t,i){if(1&t&&(e.TgZ(0,"div",5)(1,"div",6)(2,"h4",7),e._uU(3),e.qZA()(),e.TgZ(4,"div",8)(5,"p",9),e._uU(6),e.qZA(),e.TgZ(7,"a",10),e._uU(8,"Acc\xe9der"),e.qZA()(),e._UZ(9,"div",11),e.qZA()),2&t){const o=i.$implicit;e.xp6(3),e.Oqu(o.title),e.xp6(3),e.Oqu(o.details),e.xp6(1),e.Q6J("routerLink",e.VKq(3,h,o.route))}}const b=[{path:"app",component:(()=>{class t{constructor(o,a,c){this.mapService=o,this.router=a,this.controlerService=c,this.tagIcon=d.V2,this.centerIcon=d.HI,this.isLegendDisplayed=!0,this.mapScaleDivSubscription=this.mapService.setMapControler.subscribe(y=>{this.mapService.setControlToMap("miniMap"),window.document.getElementById("overview-map").appendChild(window.document.getElementsByClassName("ol-overviewmap ol-custom-overviewmap")[0]),this.mapService.setControlToMap("scale"),window.document.getElementById("legend-scale").appendChild(window.document.getElementsByClassName("ol-scale-line ol-unselectable")[0]),this.mapService.setControlToMap("attribution"),window.document.getElementById("attribution").appendChild(window.document.getElementsByClassName("ol-attribution ol-unselectable ol-control ol-uncollapsible")[0])}),this.routerSubscription=this.router.events.subscribe(y=>{this.currentMapTool=a.url})}ngOnInit(){this.mapService.mapInteraction(!0),this.sendResumeSubMenus(),this.mapService.buildMapMapControlers()}ngAfterViewInit(){}ngOnDestroy(){this.mapService.mapInteraction(!1),this.mapService.unsetControlToMap("scale"),this.mapService.unsetControlToMap("attribution"),this.mapService.unsetControlToMap("miniMap"),this.mapScaleDivSubscription.unsubscribe(),this.routerSubscription.unsubscribe()}sendResumeSubMenus(){this.controlerService.pullSubMenus([])}showHideLegend(){this.isLegendDisplayed=!this.isLegendDisplayed}zoomOnData(){this.mapService.sendZoomAction()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(g.S),e.Y36(l.F0),e.Y36(p.L))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-layout"]],decls:24,vars:5,consts:[[1,"container-fluid","g-0"],[1,"d-flex","flex-column"],[1,"d-flex","flex-row","map-content"],[1,"legend-container"],[1,"d-flex","flex-column","flex-fill"],[1,"d-flex","flex-row","align-items-end","justify-content-between","px-3"],["id","legendLabels",1,"d-flex","flex-row"],["type","button","checked","","autocomplete","off",1,"rounded-top","border-0","bg-dark","bg-gradient","text-white","mx-2","p-2","-1",3,"click"],[1,"",3,"icon"],["title","Centrer","type","button","checked","","autocomplete","off",1,"rounded-top","border-0","bg-warning","bg-gradient","text-black","mx-2","mt-2","-1",3,"click"],[1,"map-sources","d-flex","flex-column"],[1,"mb-1","me-1"],["id","legend-scale",1,"float-end","shadow"],[1,"mb-2","me-2"],["id","overview-map",1,"float-end","shadow","d-none","d-sm-block"],["id","attribution",1,"float-end","d-none","d-sm-block"],[1,"bg-white","legend-content","text-center","py-3","justify-content-center",3,"ngClass"],["name","map-activities"],["name","map-gtfs-viewer"],["name","map-sandbox"],[1,"d-flex","flex-column","flex-lg-row","bg-white","legend-content","text-center","py-3","justify-content-center",3,"ngClass"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"button",7),e.NdJ("click",function(){return a.showHideLegend()}),e._UZ(8,"fa-icon",8),e._uU(9," L\xe9gende "),e.qZA(),e.TgZ(10,"button",9),e.NdJ("click",function(){return a.zoomOnData()}),e._UZ(11,"fa-icon",8),e.qZA()(),e.TgZ(12,"div",10)(13,"div",11),e._UZ(14,"div",12),e.qZA(),e.TgZ(15,"div",13),e._UZ(16,"div",14),e.qZA(),e.TgZ(17,"div",1),e._UZ(18,"div",15),e.qZA()()(),e.TgZ(19,"div",16),e._UZ(20,"router-outlet",17)(21,"router-outlet",18)(22,"router-outlet",19),e.qZA(),e._UZ(23,"div",20),e.qZA()()()()),2&o&&(e.Q6J("@fadeInOut",void 0),e.xp6(8),e.Q6J("icon",a.tagIcon),e.xp6(3),e.Q6J("icon",a.centerIcon),e.xp6(8),e.Q6J("ngClass",a.isLegendDisplayed?"d-block":"d-none"),e.xp6(4),e.Q6J("ngClass",a.isLegendDisplayed?"d-none":"d-block"))},directives:[u.BN,s.mk,l.lC],styles:[".map-content{min-height:100vh;pointer-events:none}.legend-container{position:sticky;bottom:0;transition:all .1s}@media (max-width: 576px){.legend-container{position:fixed;width:100%}}.legend-content{box-shadow:0 -5px 20px #00000080}.legend-content.disable{height:2em}.legend-content.disable .d-flex{visibility:hidden}.map-sources{position:absolute;right:0em}.ol-scale-line,.ol-control{position:unset!important}.ol-attribution{max-width:unset}#legend-scale{font-size:12px!important;background-color:#f1f1f1c9!important;margin:3px!important;padding:5px;border-radius:5px}.ol-scale-line{background:unset}.ol-scale-line-inner{border:2px solid #000;color:#000;border-top:none}\n"],encapsulation:2,data:{animation:[m.Ae]}}),t})(),children:[{path:"activities",loadChildren:()=>Promise.all([n.e(883),n.e(255),n.e(592),n.e(976)]).then(n.bind(n,1976)).then(t=>t.MapActivitiesModule)},{path:"sandbox",loadChildren:()=>Promise.all([n.e(883),n.e(592),n.e(596)]).then(n.bind(n,9596)).then(t=>t.MapSandboxModule)},{path:"gtfs-viewer",loadChildren:()=>Promise.all([n.e(883),n.e(255),n.e(801)]).then(n.bind(n,4801)).then(t=>t.MapGtfsViewerModule)},{path:"",redirectTo:"",pathMatch:"full"}]},{path:"",component:(()=>{class t{constructor(o){this.controlerService=o,this.mapPagesMenus=d.v2}ngOnInit(){this.sendResumeSubMenus()}sendResumeSubMenus(){this.controlerService.pullSubMenus([])}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(p.L))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:5,vars:2,consts:[[1,"container-fluid"],[1,"row","justify-content-center"],[1,"col-11","mt-4","maps-content"],[1,"grid-container"],["class","mb-4 feat-map bg-white",4,"ngFor","ngForOf"],[1,"mb-4","feat-map","bg-white"],[1,"card-header","bg-dark","bg-gradient","text-white"],[1,"card-title"],[1,"card-body"],[1,"card-text"],[1,"btn","btn-warning","mt-auto","fw-bold",3,"routerLink"],[1,"card-footer"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,f,10,5,"div",4),e.qZA()()()()),2&o&&(e.xp6(1),e.Q6J("@fadeInOut",void 0),e.xp6(3),e.Q6J("ngForOf",a.mapPagesMenus.sub_menus))},directives:[s.sg,l.yS],styles:[".grid-container[_ngcontent-%COMP%]{columns:200px;-webkit-column-count:3;-webkit-column-gap:3%;-moz-column-count:3;-moz-column-gap:3%;column-count:3;column-gap:5%}.feat-map[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr auto;page-break-inside:avoid;break-inside:avoid}"],data:{animation:[m.Ae]}}),t})(),data:{title:"Cartes",page:"home"}}];let x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(b)],l.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,x,u.uH]]}),t})()}}]);