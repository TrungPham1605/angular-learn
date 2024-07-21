import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd12BuiltInPipesComponent } from './vd12-built-in-pipes.component';

describe('Vd12BuiltInPipesComponent', () => {
  let component: Vd12BuiltInPipesComponent;
  let fixture: ComponentFixture<Vd12BuiltInPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vd12BuiltInPipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Vd12BuiltInPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
