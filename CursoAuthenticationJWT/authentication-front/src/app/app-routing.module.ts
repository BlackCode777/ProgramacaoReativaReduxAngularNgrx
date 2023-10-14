import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  // inicio da aplicação
  //{ path: '', redirectTo: 'auth', pathMatch: 'full' },
  // chamando o core
  {
    path: '',
    loadChildren: () =>
      import('./core/components/auth/auth.module').then((m) => m.AuthModule),
  },
  // chamando o admin
  {
    path: 'admin',
    // passoService - 20 - configurando a proteção da rota, AuthGuard intercepta a rota 
    // e verifica se o usuario esta logado antes do carregamento da pagina
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./components/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
