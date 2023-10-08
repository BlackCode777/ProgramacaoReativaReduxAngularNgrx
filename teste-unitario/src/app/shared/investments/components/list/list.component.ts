import { Component } from '@angular/core';

// Iterfaces no model
import { Investments } from '../../model/investments';
import { ListInvestmentsService } from '../../services/list-investments.service';
import { ObjetoInterfaceMapdeDatas } from '../../model/objetoInterfaceMapdeDatas';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public investments: Array<Investments> = [];
  public mapDatas: Array<ObjetoInterfaceMapdeDatas> = [];

  constructor(private investmentsService: ListInvestmentsService) {}

  ngOnInit() {
    this.investmentsService
      .getMapDatas()
      .subscribe((mapdatas: Array<ObjetoInterfaceMapdeDatas>) => {
        this.mapDatas = mapdatas;
      });
  }

  /*
  this.investmentsService
      .list()
      .subscribe((investments: Array<Investments>) => {
        this.investments = investments;
      });
  */
}
