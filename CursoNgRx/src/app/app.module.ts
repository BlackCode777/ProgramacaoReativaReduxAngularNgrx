import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroUserComponent } from './componentes/usuario/cadastro-user/cadastro-user.component';
import { ListagemUserComponent } from './componentes/usuario/listagem-user/listagem-user.component';
import { MainComponent } from './componentes/usuario/main/main.component';
import { UsuarioServiceService } from './repository/usuario-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListagemUserComponent,
    CadastroUserComponent,
    MainComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ UsuarioServiceService ],
  bootstrap: [AppComponent],
  exports: [],

})
export class AppModule { 

}
