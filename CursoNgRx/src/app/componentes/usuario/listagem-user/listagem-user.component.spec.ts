import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemUserComponent } from './listagem-user.component';

describe('ListagemUserComponent', () => {
  let component: ListagemUserComponent;
  let fixture: ComponentFixture<ListagemUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
