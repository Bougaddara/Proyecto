import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegiRoutingModule } from './Regi-routing.module';
import { RegiComponent } from './regi.component';


@NgModule({
  declarations: [
    RegiComponent
  ],
  imports: [
    CommonModule,
    RegiRoutingModule
  ]
})
export class RegiModule { }
