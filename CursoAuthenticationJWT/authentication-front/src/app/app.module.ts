import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './components/admin/admin.module';
import { AuthRoutingModule } from './core/components/auth/auth-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthRoutingModule,
    AdminModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
