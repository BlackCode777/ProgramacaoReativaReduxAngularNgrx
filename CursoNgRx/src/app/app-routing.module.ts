import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemUserComponent } from './componentes/usuario/listagem-user/listagem-user.component';
import { MainComponent } from './componentes/usuario/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'listagemUser', component: ListagemUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
