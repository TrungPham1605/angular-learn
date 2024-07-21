import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd05BuiltInDirectivesComponent } from './vd05-built-in-directives.component';

describe('Vd05BuiltInDirectivesComponent', () => {
  let component: Vd05BuiltInDirectivesComponent;
  let fixture: ComponentFixture<Vd05BuiltInDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vd05BuiltInDirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Vd05BuiltInDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
