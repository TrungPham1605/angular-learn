import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd07InputOuputComponent } from './vd07-input-ouput.component';

describe('Vd07InputOuputComponent', () => {
  let component: Vd07InputOuputComponent;
  let fixture: ComponentFixture<Vd07InputOuputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vd07InputOuputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Vd07InputOuputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
