import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroUserComponent } from './componentes/usuario/cadastro-user/cadastro-user.component';
import { ListagemUserComponent } from './componentes/usuario/listagem-user/listagem-user.component';
import { MainComponent } from './componentes/usuario/main/main.component';
import { UsuarioServiceService } from './repository/usuario-service.service';
import { appEffects, appReducers } from './Store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    ListagemUserComponent,
    CadastroUserComponent,
    MainComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    // Importando o StoreModule.forRoot(appReducers) e EffectsModule.forRoot(appEffects)
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    // Ativano o module do Redux devtools
    StoreDevtoolsModule.instrument(), // maxAge: 25, logOnly: environment.production
  ],
  providers: [UsuarioServiceService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
