import { FormCarroComponent } from './../carro/form-carro/form-carro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroConsultaComponent } from '../carro/carro-consulta/carro-consulta.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/carro',
    pathMatch: 'full'
  },
  {
    path: 'carro',
    pathMatch: 'full',
    component: CarroConsultaComponent,
  },

  {
    path: 'carro/cadastro',
    pathMatch: 'full',
    component: FormCarroComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
