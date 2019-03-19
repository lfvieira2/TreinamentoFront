import { PortaModule } from './../porta/porta.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroConsultaComponent } from './carro-consulta/carro-consulta.component';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { FormCarroComponent } from './form-carro/form-carro.component';


@NgModule({
  declarations: [CarroConsultaComponent, FormCarroComponent],
  imports: [
    CommonModule,
    TableModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PortaModule
  ],
  exports:[CarroConsultaComponent, FormCarroComponent]
  
})
export class CarroModule { }
