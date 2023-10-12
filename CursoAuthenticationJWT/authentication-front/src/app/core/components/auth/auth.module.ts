import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SignComponent } from './pages/sign/sign.component';


@NgModule({ // passo - 1
  declarations: [SignComponent],
  imports: [ReactiveFormsModule, CommonModule, AuthRoutingModule, HttpClientModule],
})
export class AuthModule {}
