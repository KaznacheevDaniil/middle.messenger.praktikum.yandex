export class Validation {
  // utils functions for valid

  static checkLength(min: number, max: number, value: string): boolean {
    return value.length >= min && value.length <= max;
  }

  static checkEmptyValue(value: string): boolean {
    return value !== '';
  }

  // Частный случай, когда логин полностью состоит из цифр
  static checkValueOnAllNumbers(value: string): boolean {
    return /^\d+$/.test(value);
  }

  static checkValueOnPresenceUpperSymbol(value: string): boolean {
    return /[A-Z+]/g.test(value);
  }

  static checkValueOnPresenceNumber(value: string): boolean {
    return /[0-9+]/g.test(value);
  }

  static checkValueOnCyrillic(value: string): boolean {
    return /[А-Яа-я]/g.test(value);
  }

  static checkValueOnSpaces(value: string): boolean {
    return /\s/g.test(value);
  }

  static checkValueOnFirstSymbolIsUpper(value: string): boolean {
    return /^[A-ZА-Я]+/.test(value);
  }

  // valid functions for fields
  static password(value: string): string[] {
    const errors = [];

    if (!this.checkEmptyValue(value)) {
      errors.push('Field is empty!');
    }
    if (!this.checkLength(8, 40, value)) {
      errors.push('The field must contain from 8 to 40 characters!');
    }
    if (!this.checkValueOnPresenceUpperSymbol(value)) {
      errors.push('The field must contain at least 1 uppercase character!');
    }
    if (!this.checkValueOnPresenceNumber(value)) {
      errors.push('The field must contain at least 1 digit!');
    }
    if (this.checkValueOnCyrillic(value)) {
      errors.push('The field must not contain Cyrillic!');
    }
    if (this.checkValueOnSpaces(value)) {
      errors.push('The field must not contain Spaces!');
    }
    return errors;
  }

  static phone(value: string): string[] {
    const errors = [];

    if (!this.checkEmptyValue(value)) {
      errors.push('Field is empty!');
    }
    if (!this.checkLength(10, 15, value)) {
      errors.push('The field must contain from 10 to 15 characters!');
    }
    if (!/^[+]?[0-9]+$/.test(value)) {
      errors.push("The phone number must contain only digits and may contain the '+' character");
    }
    return errors;
  }

  static message(value: string): string[] {
    const errors = [];
    if (!this.checkEmptyValue(value)) {
      errors.push('Field is empty!');
    }
    return errors;
  }

  static email(value: string): string[] {
    const errors = [];
    if (!this.checkEmptyValue(value)) {
      errors.push('Field is empty!');
    }
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)) {
      errors.push('The mail should have the following similar form: example@gnail.com');
    }
    return errors;
  }

  static login(value: string): string[] {
    const errors = [];

    if (!this.checkEmptyValue(value)) {
      errors.push('Field is empty!');
    }
    if (!this.checkLength(3, 20, value)) {
      errors.push('The field must contain from 3 to 20 characters!');
    }
    if (this.checkValueOnAllNumbers(value)) {
      errors.push('The field should not consist entirely of digits!');
    }
    if (!/^[A-Za-z0-9_-]+$/.test(value)) {
      errors.push("The login must contain the Latin alphabet and may contain '-_'!");
    }

    return errors;
  }

  static names(value: string): string[] {
    const errors = [];
    if (!this.checkEmptyValue(value)) {
      errors.push('Field is empty!');
    }
    if (!this.checkValueOnFirstSymbolIsUpper(value)) {
      errors.push('The first letter should be capitalized!');
    }
    if (!/[A-Za-zа-яА-Я-]+$/.test(value)) {
      errors.push('The field can contain only Latin, Cyrillic and the symbol \'-\'!');
    }
    return errors;
  }

  static confirmPassword(input, value: string): string[] {
    const errors = [];
    if (input.closest('.info-fields').querySelector('input[name=newPassword]').value !== value) {
      errors.push('Passwords don\'t match!');
    }
    return errors;
  }

  static newPassword = this.password;

  static oldPassword(value: string): string[] {
    const errors = [];
    if (!this.checkEmptyValue(value)) {
      errors.push('Field is empty!');
    }
    return errors;
  }

  // utils functions for check and show errors

  static check(form): boolean {
    let valid = true;
    const inputs = form.querySelectorAll('[data-valid=true]');
    inputs.forEach((input) => {
      let errors : string[] = [];
      if (input.name === 'confirmPassword') {
        errors = this[input.name](input, input.value);
      } else {
        errors = this[input.name === 'first_name' || input.name === 'second_name' ? 'names' : input.name](input.value);
      }
      if (errors.length > 0) {
        valid = false;
        this.showError(input, errors);
      }
    });
    return valid;
  }

  static showError(input, messages?: string[]): void {
    const errorContainer = input.closest('.input-wrap').querySelector('.error');
    const label = input.closest('.input-wrap').querySelector('label');
    if (label) {
      label.style.color = 'red';
    }
    if (!messages) {
      errorContainer.textContent = `${input.name} is not required!`;
    } else {
      errorContainer.textContent = '';
      messages.forEach((item) => {
        const elem = document.createElement('div');
        elem.textContent = item;
        errorContainer.appendChild(elem);
      });
    }
  }

  static hideError(input : HTMLInputElement): void {
    const inputWrap = input.closest('.input-wrap');
    const label = inputWrap.querySelector('label');
    if (label) {
      label.style.color = '';
    }
    inputWrap.querySelector('.error').textContent = '';
  }
}
