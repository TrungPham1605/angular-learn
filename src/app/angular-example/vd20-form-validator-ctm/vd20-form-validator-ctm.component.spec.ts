import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd20FormValidatorCtmComponent } from './vd20-form-validator-ctm.component';

describe('Vd20FormValidatorCtmComponent', () => {
  let component: Vd20FormValidatorCtmComponent;
  let fixture: ComponentFixture<Vd20FormValidatorCtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vd20FormValidatorCtmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Vd20FormValidatorCtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
