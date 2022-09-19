import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes internos
import { NavbarComponent } from './navbar/navbar.component';
import { SuscriptorslistComponent } from './suscriptores/suscriptorslist/suscriptorslist.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
  ]
})
export class DashboardModule { }
