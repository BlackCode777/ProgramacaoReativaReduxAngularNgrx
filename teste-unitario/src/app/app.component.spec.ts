import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankingComponent } from './shared/banking/banking.component';

describe('AppComponent', () => { // Describe serve mostrar qual componente será testado
let component:BankingComponent;
let fixture:ComponentFixture<BankingComponent>;// isso serve para criar um componente tipado

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Mostrar componente criado', () => {
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
  
  /*


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'teste-unitario'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('teste-unitario');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'teste-unitario app is running!'
    );
  });

  // Incluindo no teste a função somar()
  it('Teste da função soma()', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.somar(2, 2)).toEqual(4);
  });

  // Incluindo no teste a função somar() para falso positivo
  it('Teste da função soma() passando valor errado !', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.somar(2, 1)).not.toEqual(4);
  });


*/
