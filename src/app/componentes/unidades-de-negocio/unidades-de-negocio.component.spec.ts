import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesDeNegocioComponent } from './unidades-de-negocio.component';

describe('UnidadesDeNegocioComponent', () => {
  let component: UnidadesDeNegocioComponent;
  let fixture: ComponentFixture<UnidadesDeNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadesDeNegocioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadesDeNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
