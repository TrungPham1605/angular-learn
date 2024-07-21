import { Component, OnInit } from '@angular/core';
import { Vd34Service } from './vd34.serviec';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-vd34-unit-test',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vd34-unit-test.component.html',
  styleUrl: './vd34-unit-test.component.scss'
})
export class Vd34UnitTestComponent {
  noti = '';
  formBuild!: FormGroup;

  constructor(
    private builder: FormBuilder,
    private vd34Svc: Vd34Service,
  ) { }

  ngOnInit(): void {
    this.createFormBuild();
  }

  createFormBuild() {
    this.formBuild = this.builder.group({
      name: ['', [Validators.required]],
      age: [0, [Validators.required]],
      color: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.formBuild.valid) {
      this.vd34Svc.createUser2(this.formBuild.value)
        .subscribe(() => {
          this.noti = `Tạo thành công!`;
          this.formBuild.reset();
        });
    } else {
      this.noti = `Có lỗi validate!`;
    }
  }

  isFieldError(fieldname: string): string {
    return (this.formBuild.get(fieldname)?.touched &&
      this.formBuild.get(fieldname)?.errors) ? 'field-error' : '';
  }

}
