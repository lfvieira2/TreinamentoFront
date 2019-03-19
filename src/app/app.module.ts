import { AppRoutingModule } from './app-routing/app-routing.module';
import { CarroService } from './carro/carro.service';
import { CarroModule } from './carro/carro.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';



import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarroModule,
    DropdownModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CarroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
