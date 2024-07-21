import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd16HttpHandleComponent } from './vd16-http-handle.component';

describe('Vd16HttpHandleComponent', () => {
  let component: Vd16HttpHandleComponent;
  let fixture: ComponentFixture<Vd16HttpHandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vd16HttpHandleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Vd16HttpHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
