import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HeaderComponent } from './header.component';
import { HeaderRoutingModule } from './header-routing.module';
import { Menu1Component } from './menu1/menu1.component';
import { RegistrateComponent } from './registrate/registrate.component';

@NgModule({
  declarations: [
    LogoComponent,
    MenuComponent,
    UsuarioComponent,
    HeaderComponent,
    Menu1Component,
    RegistrateComponent
  ],
  exports: [
    LogoComponent, MenuComponent, UsuarioComponent, HeaderComponent
  ],
  imports: [
    CommonModule,HeaderRoutingModule
  ]
})
export class HeaderModule { }
