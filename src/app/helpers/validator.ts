import { AbstractControl, ValidatorFn } from '@angular/forms';

export function operatorCodeValidator(codes: number[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    let isValid = false;
    const currentCode = control.value && control.value.match(/\((\d+)\)/);
    if (currentCode && currentCode[1]) {
      isValid =
        codes.filter((item) => Number(currentCode[1]) === item).length === 1;
    }
    return !isValid ? { isValidCode: { value: control.value } } : null;
  };
}

export const MASK = [
  '+',
  '7',
  ' ',
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];
export const AMOUNT_MASK = [/[1-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
