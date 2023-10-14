import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthRoutingModule } from './auth-routing.module';
import { SignComponent } from './pages/sign/sign.component';


@NgModule({
  // passo - 1
  declarations: [SignComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule,
    //JwtHelperService,
  ],
  exports: [SignComponent],
  providers: [JwtHelperService],
})
export class AuthModule {}
