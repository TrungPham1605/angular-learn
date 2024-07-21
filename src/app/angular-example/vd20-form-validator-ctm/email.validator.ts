import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const customEmailValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) {
    return null;
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(control.value)) {
    return { invalidEmail: { valid: false, value: control.value } };
  } else {
    return null;
  }
};
