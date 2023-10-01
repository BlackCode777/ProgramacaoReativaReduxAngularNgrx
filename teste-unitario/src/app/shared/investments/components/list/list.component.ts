import { Component } from '@angular/core';

// Iterfaces no model
import { Investments } from '../../model/investments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public investments: Array<Investments> = [
    { name: 'Tesouro Direto', value: 1000 },
    { name: 'Ações', value: 2000 },
    { name: 'CDB', value: 3000 },
    { name: 'LCI', value: 4000 },
    { name: 'LC', value: 5000 },
    { name: 'COE', value: 6000 },
    { name: 'Debêntures', value: 7000 },
    { name: 'FII', value: 8000 },
    { name: 'Fundos', value: 9000 },
    { name: 'Poupança', value: 10000 },
  ]

  constructor(){}

  ngOnInit(){}

}
