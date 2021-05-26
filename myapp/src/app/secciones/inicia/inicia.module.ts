import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { iniciaRoutingModule } from './inicia-routing.module';
import { IniciaComponent } from './inicia.component';


@NgModule({
  declarations: [
    IniciaComponent
  ],
  imports: [
    CommonModule,
    iniciaRoutingModule
  ]
})
export class iniciaModule { }
