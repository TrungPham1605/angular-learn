import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { customEmailValidator } from './email.validator';

@Component({
  selector: 'app-vd20-form-validator-ctm',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vd20-form-validator-ctm.component.html',
  styleUrls: ['./vd20-form-validator-ctm.component.scss']
})
export class Vd20FormValidatorCtmComponent implements OnInit {
  formBuild!: UntypedFormGroup;

  constructor(private builder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.createFormBuild();
  }

  createFormBuild() {
    this.formBuild = this.builder.group({
      yourName: ['', [Validators.required]],
      age: ['', [Validators.min(10)]],
      point: ['', [Validators.min(0), Validators.max(10), Validators.required]],
      email: ['', [customEmailValidator]],
    });
  }

  makeFieldRequired() {
    this.formBuild.get('yourName')?.setValidators([Validators.required]);
    this.formBuild.get('yourName')?.updateValueAndValidity();
  }

  makeFieldOptional() {
    this.formBuild.get('yourName')?.setValidators(null);
    this.formBuild.get('yourName')?.updateValueAndValidity();
  }
}
