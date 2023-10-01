import { Component } from '@angular/core';

// Iterfaces no model
import { Investments } from '../../model/investments';
import { ListInvestmentsService } from '../../services/list-investments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public investments: Investments | any = [];

  constructor(private investmentsService: ListInvestmentsService) {}

  ngOnInit() {
    this.investmentsService.list().subscribe((investments: Investments) => {
      this.investments = investments;
    });
  }
}
