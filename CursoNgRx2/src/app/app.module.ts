import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroUsuariosComponent } from './componentes/cadastro/cadastro-usuarios/cadastro-usuarios.component';
import { ListagemUsuariosComponent } from './componentes/listagem/listagem-usuarios/listagem-usuarios.component';
import { MainComponent } from './componentes/main/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemUsuariosComponent,
    MainComponent,
    CadastroUsuariosComponent,
  ],
  imports: [FormsModule, HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
