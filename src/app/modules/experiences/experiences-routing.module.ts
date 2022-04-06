import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '@modules/experiences/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, data: { title: 'Expériences', page: 'experiences' } },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule { }