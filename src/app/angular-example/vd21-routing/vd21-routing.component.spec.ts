import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd21RoutingComponent } from './vd21-routing.component';

describe('Vd21RoutingComponent', () => {
  let component: Vd21RoutingComponent;
  let fixture: ComponentFixture<Vd21RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vd21RoutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Vd21RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
