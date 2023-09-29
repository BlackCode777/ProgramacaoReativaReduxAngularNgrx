import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent],
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
  it('Teste da função setSacar()', () => {
    component.setSacar('500');
    fixture.detectChanges(); //detectedChanges() é um método que força a atualização do componente
    expect(component.getCarteira).toEqual(3500);
    expect(component.getPoupanca).toEqual(500);
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
  it('setDepositar(): Mostrar que a transfer de carteira não tem string (isNan) ou carteira não pode ser maior que valor', () => {
    expect(component.setDepositar('2000')).not.toBeUndefined();
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(1000);
    expect(component.getCarteira).toEqual(3000);
  });
});
