import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { BankingComponent } from './banking/banking.component';
import { ListComponent } from './investments/components/list/list.component';


@NgModule({
  declarations: [BankingComponent, ListComponent],
  imports: [
    MatCardModule,
    MatListModule,
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
  ],
  exports: [BankingComponent, ListComponent],
})
export class SharedModule {}
