import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibreriaRoutingModule } from './libreria-routing.module';
import { libreriaComponent } from './libreria.component';


@NgModule({
  declarations: [
    libreriaComponent
  ],
  imports: [
    CommonModule,
    LibreriaRoutingModule
  ]
})
export class libreriaModule { }
