import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroConsultaComponent } from './carro-consulta.component';

describe('CarroConsultaComponent', () => {
  let component: CarroConsultaComponent;
  let fixture: ComponentFixture<CarroConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
