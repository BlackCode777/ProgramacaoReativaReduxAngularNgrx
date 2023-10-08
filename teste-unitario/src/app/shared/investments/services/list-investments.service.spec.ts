import { TestBed } from '@angular/core/testing';

import { ListInvestmentsService } from './list-investments.service';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Investments } from '../model/investments';
import { MOCK_LIST } from './list-investments.mock';

describe('ListInvestmentsService', () => {
  let service: ListInvestmentsService;
  let httpTestingController: HttpTestingController; //Chamando o controller
  let httpClient: HttpClient; //chamando httpclient

  const URL = 'http://localhost:3000/investments';

  const mockList: Array<Investments | any> = MOCK_LIST;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient); // Chamando HttpClient
    httpTestingController = TestBed.inject(HttpTestingController); // Inject the http, test controller, and service-under-test
    service = TestBed.inject(ListInvestmentsService); // Chamando o serviço

  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('(U) Carrega be list all investments', (done) => {

    // usando subcribe para pegar o retorno do serviço
    service.list().subscribe((res: Array<Investments>) => {
      expect( res[0].name).toEqual('Investimento 1');
      expect(res[0].value).toEqual(1000);

      expect(res[4].name).toEqual('Investimento 5');
      expect(res[4].value).toEqual(1000);

      done();//done() - para o carregametno do subscribe
    });

    //Pegando a requisição
    const req = httpTestingController.expectOne(URL);
    req.flush(mockList);

    expect(req.request.method).toEqual('GET');

  });




});

















