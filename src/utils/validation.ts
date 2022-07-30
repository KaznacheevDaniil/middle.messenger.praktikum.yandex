export default class Validation {

  // utils functions for valid

  checkLength = function(min: number, max: number, value: string): boolean {
    return value.length >= min && value.length <= max;
  }

  checkEmptyValue = function(value: string): boolean {
    return value !== '';
  }
  // Частный случай, когда логин полностью состоит из цифр
  checkValueOnAllNumbers = function(value: string): boolean {
    return /^\d+$/.test(value);
  }

  checkValueOnPresenceUpperSymbol = function(value: string): boolean {
    return /[A-Z+]/g.test(value);
  }

  checkValueOnPresenceNumber = function(value: string): boolean {
    return /[0-9+]/g.test(value);
  }

  checkValueOnCyrillic = function(value: string): boolean {
    return /[А-Яа-я]/g.test(value);
  }

  checkValueOnSpaces = function(value: string): boolean {
    return /\s/g.test(value);
  }

  checkValueOnFirstSymbolIsUpper = function(value: string): boolean {
    return /^[A-ZА-Я]+/.test(value);
  }

  // valid functions for fields
  password = function(value: string): string[] {
    let errors = [];

     if(!this.checkEmptyValue(value)){
       errors.push('Field is empty!');
     }
     if(!this.checkLength(8, 40, value)){
      errors.push('The field must contain from 8 to 40 characters!');
     }
    if(!this.checkValueOnPresenceUpperSymbol(value)){
      errors.push('The field must contain at least 1 uppercase character!');
    }
    if(!this.checkValueOnPresenceNumber(value)){
      errors.push('The field must contain at least 1 digit!');
    }
    if(this.checkValueOnCyrillic(value)){
      errors.push('The field must not contain Cyrillic!');
    }
    if(this.checkValueOnSpaces(value)){
      errors.push('The field must not contain Spaces!');
    }
    return errors;
  };

  phone = function(value: string): string[] {
    let errors = [];

    if(!this.checkEmptyValue(value)){
      errors.push('Field is empty!');
    }
    if(!this.checkLength(10, 15, value)){
      errors.push('The field must contain from 10 to 15 characters!');
    }
    if(!/^[+]?[0-9]+$/.test(value) ){
      errors.push("The phone number must contain only digits and may contain the '+' character");
    }
    return errors;
  }

  message = function(value: string): string[] {
    let errors = [];
    if(!this.checkEmptyValue(value)){
      errors.push('Field is empty!');
    }
    return errors;
  }

  email = function(value: string): string[] {
    let errors = [];
    if (!this.checkEmptyValue(value)) {
      errors.push('Field is empty!');
    }
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)) {
      errors.push('The mail should have the following similar form: example@gnail.com');
    }
    return errors;
  }

  login = function(value: string): string[] {
    let errors = [];

    if(!this.checkEmptyValue(value)){
      errors.push('Field is empty!');
    }
    if(!this.checkLength(3, 20, value)){
      errors.push('The field must contain from 3 to 20 characters!');
    }
    if(this.checkValueOnAllNumbers(value)){
      errors.push('The field should not consist entirely of digits!');
    }
    if(!/^[A-Za-z0-9_-]+$/.test(value)){
      errors.push("The login must contain the Latin alphabet and may contain '-_'!");
    }

    return errors;
  }

  names = function(value: string): string[] {
    let errors = [];
    if(!this.checkEmptyValue(value)){
      errors.push('Field is empty!');
    }
    if(!this.checkValueOnFirstSymbolIsUpper(value)){
      errors.push('The first letter should be capitalized!');
    }
    if(!/[A-Za-zа-яА-Я-]+$/.test(value)){
      errors.push('The field can contain only Latin, Cyrillic and the symbol \'-\'!');
    }
    return errors;
  }

  confirmPassword = function(input, value: string): string[] {
    let errors = [];
    if(input.closest('.info-fields').querySelector('input[name=password]').value !== value){
      errors.push('Passwords don\'t match!');
    };
    return errors;
  }

  currentPassword = function(value: string): string[] {
    let errors = [];
    if(!this.checkEmptyValue(value)){
      errors.push('Field is empty!');
    }
    return errors;
  }

// utils functions for check and show errors

  check = (form): boolean => {
    let valid = true;
    const inputs = form.querySelectorAll('[data-valid=true]');
    inputs.forEach((input) => {
      let errors : string[] = []
      if(input.name === 'confirmPassword'){
        errors = this[input.name](input, input.value);
      }else{
        errors = this[input.name === 'first_name' || input.name === 'second_name' ? 'names' : input.name](input.value);
      }
      console.log(input.name)
      if (errors.length > 0) {
        valid = false;
        this.showError(input, errors);
      }
    });
    return valid;
  };

  showError = (input, messages?: string[]): void => {
    const errorContainer = input.closest('.input-wrap').querySelector('.error');
    const label = input.closest('.input-wrap').querySelector('label');
    if (label) {
      label.style.color = 'red';
    }
    if (!messages) {
      errorContainer.textContent = `${input.name} is not required!`;
    } else {
      errorContainer.textContent = '';
      messages.forEach((item)=>{
        let elem = document.createElement('div');
        elem.textContent = item;
        errorContainer.appendChild(elem)
      })
    }
  };

  hideError = (input : HTMLInputElement): void => {
    const inputWrap = input.closest('.input-wrap');
    const label = inputWrap.querySelector('label');
    if (label) {
      label.style.color = '';
    }
    inputWrap.querySelector('.error').textContent = '';
  };
}
