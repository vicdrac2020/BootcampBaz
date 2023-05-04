import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraTituloComponent } from './barra-titulo.component';

describe('BarraTituloComponent', () => {
  let component: BarraTituloComponent;
  let fixture: ComponentFixture<BarraTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraTituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
