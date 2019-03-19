import { PortaService } from './porta.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortaComponent } from './porta/porta.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [PortaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    ReactiveFormsModule,
    TableModule,
  
  ],
  exports: [PortaComponent],
  providers:[PortaService]
})
export class PortaModule { }
