import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenteEstrategicasComponent } from './frente-estrategicas.component';

describe('FrenteEstrategicasComponent', () => {
  let component: FrenteEstrategicasComponent;
  let fixture: ComponentFixture<FrenteEstrategicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrenteEstrategicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrenteEstrategicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
