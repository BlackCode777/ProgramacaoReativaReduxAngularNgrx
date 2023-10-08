import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { ListComponent } from '../investments/components/list/list.component';
import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent, ListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar um componente', () => {
    expect(component).toBeTruthy();
  });

  // Testando a função getPoupanca()
  it('Teste da função getPoupanca()', () => {
    expect(component.getPoupanca).toEqual(1000);
  });

  // Testando a função getCarteira()
  it('Teste da função getCarteira()', () => {
    expect(component.getCarteira).toEqual(3000);
  });

  // Testando a função setSacar()
  it('(U) setSacar(): shoud transfer poupanca carteira', () => {
    component.setSacar('500');
    fixture.detectChanges(); //detectedChanges() é um método que força a atualização do componente
    expect(component.getCarteira).toEqual(3500);
    expect(component.getPoupanca).toEqual(500);
  });

    // Testando a função setDepositar()
  it('(I) setSacar(): shoud transfer poupanca from carteira', () => {
    // cria uma variavel do id depositar-depositar
    let el = fixture.debugElement.nativeElement;
    el.querySelector("#input-sacar").value = '3000';
    el.querySelector("#sacar").click();
    fixture.detectChanges();
    expect(el.querySelector('#get-carteira').textContent).toEqual('3000');
    //expect(component.getPoupanca).toEqual(1000);
    //expect(component.getCarteira).toEqual(3000);
    //fixture.debugElement.nativeElement.querySelector("depositar").click();
  });

  // Testando o if dos métodos setSacar() e setDepositar()
  it('setSacar(): Mostrar que a transferencia de poupanca não pode ser maior que o valor da poupanca', () => {
    expect(component.setSacar('2000')).not.toBeUndefined();
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(1000);
    expect(component.getCarteira).toEqual(3000);
  });

  // Testando a função setDepositar()
  it('Teste da função setDepositar()', () => {
    component.setDepositar('500');
    fixture.detectChanges(); //detectedChanges() é um método que força a atualização do componente
    expect(component.getPoupanca).toEqual(1500);
  });

  // Testando o if dos métodos setDepositar() e setDepositar()
  it('(U) setDepositar(): Mostrar que a transfer de carteira não tem string (isNan) ou carteira não pode ser maior que valor', () => {
    expect(component.setDepositar('2000')).not.toBeUndefined();
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(1000);
    expect(component.getCarteira).toEqual(3000);
  });

    // Testando a função setDepositar()
  it('(I) setDepositar(): shoud transfer carteira from poupanca ', () => {
    // cria uma variavel do id depositar-depositar
    let el = fixture.debugElement.nativeElement;
    el.querySelector("#input-depositar").value = '2000';
    el.querySelector("#depositar").click();
    fixture.detectChanges();
    expect(el.querySelector('#get-poupanca').textContent).toEqual('1000');
    //expect(component.getPoupanca).toEqual(1000);
    //expect(component.getCarteira).toEqual(3000);
    //fixture.debugElement.nativeElement.querySelector("depositar").click();
  });


});
