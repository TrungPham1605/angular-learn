import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd25InteractionComponentsComponent } from './vd25-interaction-components.component';

describe('Vd25InteractionComponentsComponent', () => {
  let component: Vd25InteractionComponentsComponent;
  let fixture: ComponentFixture<Vd25InteractionComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vd25InteractionComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Vd25InteractionComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
