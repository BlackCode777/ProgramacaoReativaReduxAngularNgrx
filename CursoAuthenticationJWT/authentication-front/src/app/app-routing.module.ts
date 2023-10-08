import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // inicio da aplicação
  //{ path: '', redirectTo: 'auth', pathMatch: 'full' },
  // chamando o core
  { path: '', loadChildren: () => import('./core/components/auth/auth.module').then(m => m.AuthModule) },
  // chamando o admin
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
