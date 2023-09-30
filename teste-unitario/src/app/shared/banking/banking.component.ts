import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent {
  public agencia: number = 12554;
  private poupanca: number = 1000;
  private carteira: number = 3000;

  constructor() {}
  ngOnInit(): void {}

  get getPoupanca(): number{
    return this.poupanca;
  }
  
  get getCarteira(): number | any {
    return this.carteira;
  }

  setSacar(valor: string): number | any {
    const sacar = Number(valor); // Aqui eu converto a string que vem do html em um number    
    if(isNaN( sacar ) || this.poupanca < sacar ){ // tratamento do NaN
      return;
    }
    this.poupanca -= sacar;
    return (this.carteira += sacar);
  }

  setDepositar(valor: string): number | undefined {
    const depositar = Number(valor); // Aqui eu converto a string que vem do html em um number
    if (isNaN(depositar) || this.poupanca < depositar) {
      return;
    }
    this.carteira -= depositar;
    return (this.poupanca += depositar);
  }
}
