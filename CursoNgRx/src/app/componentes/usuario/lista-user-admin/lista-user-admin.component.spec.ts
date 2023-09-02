import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUserAdminComponent } from './lista-user-admin.component';

describe('ListaUserAdminComponent', () => {
  let component: ListaUserAdminComponent;
  let fixture: ComponentFixture<ListaUserAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaUserAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
