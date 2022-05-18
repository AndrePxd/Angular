import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { Tema1Component } from './tema1/tema1.component';
import { Tema2Component } from './tema2/tema2.component';
import { Tema3Component } from './tema3/tema3.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {
    path:'tema1',
    component:Tema1Component
  },
  {
    path: 'tema2',
    component:Tema2Component
  },
  {
    path: 'tema3',
    component:Tema3Component
  },
  {
    path: 'home',
    component:HomeComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }