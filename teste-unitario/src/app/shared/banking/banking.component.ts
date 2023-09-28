import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent {
  public agencia: number = 12554;
  private poupanca: number = 1000;
  public contaCorrente: number = 2000;
  private carteira: number = 3000;

  constructor() {}
  ngOnInit(): void {}

  get getPoupanca(): number {
    return this.poupanca;
  }
  get getCarteira(): number {
    return this.carteira;
  }

  setSacar(valor: string): number {
    const sacar = Number(valor); // Aqui eu converto a string que vem do html em um number
    console.log(sacar);
    return sacar;
    //this.poupanca -= valor;
  }

  setDepositar(valor: string): number {
    const depositar = Number(valor); // Aqui eu converto a string que vem do html em um number
    console.log(depositar);
    return depositar;
    //this.poupanca += valor;
  }
}
