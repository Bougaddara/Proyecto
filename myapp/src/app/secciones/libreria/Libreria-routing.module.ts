import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { libreriaComponent } from './libreria.component';


const routes: Routes = [
  { path: '', component: libreriaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibreriaRoutingModule { }
