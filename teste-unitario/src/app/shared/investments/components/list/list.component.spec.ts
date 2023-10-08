
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Investments } from '../../model/investments';
import { MOCK_LIST } from '../../services/list-investments.mock';
import { ListInvestmentsService } from '../../services/list-investments.service';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestmentsService;

  const mockList: Array<Investments | any> = MOCK_LIST;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestmentsService); // Chamando o serviço
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
    let investments =
      fixture.debugElement.nativeElement.querySelectorAll('.list-item'); //Pegando o elemento html para testar

    spyOn(service, 'list').and.returnValue(of(mockList)); // Espionando o serviço e retornando o mockList

    component.ngOnInit(); //spyOn() fica espionando o ngOnInit()
    fixture.detectChanges(); //detecta as mudanças

    expect(service.list).toHaveBeenCalledWith(); // Verifica se o serviço foi chamado
    expect(component.investments.length).toEqual(5); // Verifica se o tamanho do array é 4

    expect(component.investments[0].name).toContain('Investimento 1'); // Verifica se o nome do primeiro item do array é 'Investimento 1'
    expect(component.investments[0].value).toEqual(1000);

    expect(component.investments[4].name).toContain('Investimento 5');
    expect(component.investments[4].value).toEqual(1000);
  });

  //Teste de Interface
  it('(I) should list investiments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList)); // Espionando o serviço e retornando o mockList

    component.ngOnInit(); //spyOn() fica espionando o ngOnInit()
    fixture.detectChanges(); //detecta as mudanças

    let investments =
      fixture.debugElement.nativeElement.querySelectorAll('.list-item'); //Pegando o elemento html para testar

    expect(investments.length).toEqual(5);
    expect(investments[0].textContent.trim()).toEqual('Investimento 1 | 1000'); // Verifica se o nome do primeiro item do array é 'Investimento 1'
    expect(investments[4].textContent.trim()).toEqual('Investimento 5 | 1000');
  
  });


  
});