import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciaComponent } from './inicia.component';


const routes: Routes = [
  { path: '', component: IniciaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class iniciaRoutingModule { }
