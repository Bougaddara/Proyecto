import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then( m => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomeModule) },

  { path: '', loadChildren: () => import('./iniciar/iniciar.module').then( m => m.IniciarModule) },
  { path: 'iniciar', loadChildren: () => import('./iniciar/iniciar.module').then( m => m.IniciarModule) },

  { path: '', loadChildren: () => import('./libreria/libreria.module').then( m => m.libreriaModule) },
  { path: 'libreria', loadChildren: () => import('./libreria/libreria.module').then( m => m.libreriaModule) },

  { path: '', loadChildren: () => import('./regi/regi.module').then( m => m.RegiModule) },
  { path: 'Regi', loadChildren: () => import('./regi/regi.module').then( m => m.RegiModule) },

  
  { path: 'categorias', loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }
