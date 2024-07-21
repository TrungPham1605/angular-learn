import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd06CustomDirectivesComponent } from './vd06-custom-directives.component';

describe('Vd06CustomDirectivesComponent', () => {
  let component: Vd06CustomDirectivesComponent;
  let fixture: ComponentFixture<Vd06CustomDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vd06CustomDirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Vd06CustomDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
