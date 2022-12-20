import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoFrenteEstrategicasComponent } from './detalhamento-frente-estrategicas.component';

describe('DetalhamentoFrenteEstrategicasComponent', () => {
  let component: DetalhamentoFrenteEstrategicasComponent;
  let fixture: ComponentFixture<DetalhamentoFrenteEstrategicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhamentoFrenteEstrategicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhamentoFrenteEstrategicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
