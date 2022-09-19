import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/components/dashboard/dashboard.component';

const routes: Routes = [
  // { path: ``, redirectTo: `dashboard`, pathMatch: `full` },
  { path: ``, component: DashboardComponent },
  { path: `suscriptores`, component: DashboardComponent },
  { path: `pagos`, component: DashboardComponent },
  { path: `reportes`, component: DashboardComponent},
  
  
  

//  {
//     path: '', loadChildren: () =>
//       import('./components/dashboard/dashboard.module')
//         .then(x => x.DashboardModule)
//   },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
