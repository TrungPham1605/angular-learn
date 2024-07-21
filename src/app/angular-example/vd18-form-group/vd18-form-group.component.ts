import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vd18-form-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vd18-form-group.component.html',
  styleUrl: './vd18-form-group.component.scss'
})
export class Vd18FormGroupComponent {
  formLegacy!: UntypedFormGroup;
  formBuild!: UntypedFormGroup;

  constructor(private builder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.createFormLegacy();
    this.createFormBuild();
  }

  createFormLegacy() {
    this.formLegacy = new UntypedFormGroup({
      yourName: new UntypedFormControl(''),
    });
  }

  createFormBuild() {
    this.formBuild = this.builder.group({
      yourName: [''],
    });
  }

  patchValue() {
    this.formBuild.patchValue({
      yourName: 'Kang Hidro',
    });
  }

  setValue() {
    this.formBuild.get('yourName')?.setValue('Angular');
  }

  resetForm() {
    this.formBuild.reset();
  }

  updateValueAndVidity() {
    this.formBuild.get('yourName')?.updateValueAndValidity();
  }

}
