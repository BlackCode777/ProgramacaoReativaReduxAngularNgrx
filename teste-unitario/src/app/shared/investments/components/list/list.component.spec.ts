
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Vai ser utilizado paa o serviço de investimentos
  it('(U) shoud list investments', () => {
    let investments = component.investments;
    expect(investments.length).toBe(4);
    expect(investments[0].name).toContain('Tesouro Direto');
  });

  //Teste de Interface
  it('(I) should list investiments', () => {
    let investments = fixture.debugElement.nativeElement.querySelectorAll('.list-item');//Pegando o elemento html para testar
    expect(investments.length).toBe(4);
    expect(investments[0].textContent.trim()).toEqual('Tesouro Direto'); // Remove a propr name do objeto para teste de interface
    expect(investments[1].textContent.trim()).toEqual('Ações');
    expect(investments[2].textContent.trim()).toEqual('CDB');
    expect(investments[3].textContent.trim()).toEqual('LCI');
    expect(investments[4].textContent.trim()).toEqual('LC');
    expect(investments[5].textContent.trim()).toEqual('COE');
    expect(investments[6].textContent.trim()).toEqual('Debêntures');
    expect(investments[7].textContent.trim()).toEqual('FII');
  });


   });