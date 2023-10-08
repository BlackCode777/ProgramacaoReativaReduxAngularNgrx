import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BankingComponent } from './banking/banking.component';
import { ListComponent } from './investments/components/list/list.component';



@NgModule({
  declarations: [BankingComponent, ListComponent],
  imports: [CommonModule, MatTableModule],
  exports: [BankingComponent],
})
export class SharedModule {}
