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

  it('should create', () => {
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

  // Testando a função setDepositar()
  it('Teste da função setDepositar()', () => {
    component.setDepositar('500');
    fixture.detectChanges(); //detectedChanges() é um método que força a atualização do componente
    expect(component.getPoupanca).toEqual(1500);
  });
});
