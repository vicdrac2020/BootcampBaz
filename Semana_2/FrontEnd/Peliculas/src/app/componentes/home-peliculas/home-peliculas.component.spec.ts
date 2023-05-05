import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePeliculasComponent } from './home-peliculas.component';

describe('HomePeliculasComponent', () => {
  let component: HomePeliculasComponent;
  let fixture: ComponentFixture<HomePeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
