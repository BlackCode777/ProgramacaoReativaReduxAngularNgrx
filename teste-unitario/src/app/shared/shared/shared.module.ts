import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankingComponent } from '../banking/banking.component';



@NgModule({
  declarations: [BankingComponent],
  imports: [CommonModule],
  exports: [BankingComponent],
})
export class SharedModule {}
