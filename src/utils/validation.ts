export default class Validation {
  password = (value: string): boolean => /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,40}$/.test(value)
    && !this.checkEmptyValue(value);

  phone = (value: string): boolean => this.checkLength(10, 15, value) && /^[+]?[0-9]+$/.test(value) && !this.checkEmptyValue(value);

  message = (value: string): boolean => this.checkEmptyValue(value);

  email = (value: string): boolean => /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(value) && !this.checkEmptyValue(value);

  login = (value: string): boolean => this.checkLength(3, 20, value)
    && /^[A-Za-z0-9_-]+$/.test(value)
    && !this.checkValueOnNumbers(value);

  names = (value: string): boolean => /^[A-ZА-Я]+[A-Za-zа-яА-Я-]+$/.test(value) && !this.checkEmptyValue(value);

  confirmPassword = (input, value: string): boolean => input.closest('.info-fields').querySelector('input[name=password]').value === value;

  check = (form): boolean => {
    let valid = true;
    const inputs = form.querySelectorAll('input[data-valid=true]');
    inputs.forEach((input) => {
      if (
        !this[input.name === 'first_name' || input.name === 'second_name' ? 'names' : input.name](
          input.value,
        )
      ) {
        valid = false;
        this.showError(input);
      }
    });
    return valid;
  };

  // utils functions

  checkLength = (min: number, max: number, value: string): boolean => value.length >= min && value.length <= max;

  checkEmptyValue = (value: string): boolean => value.length === 0;

  checkValueOnNumbers = (value: string): boolean => /^\d+$/.test(value);

  showError = (input, message?: string): void => {
    const label = input.closest('.input-wrap').querySelector('label');
    const errorContainer = input.closest('.input-wrap').querySelector('.error');
    label.style.color = 'red';
    if (!message) {
      errorContainer.textContent = `${input.name} is not required!`;
    } else {
      errorContainer.textContent = message;
    }
  };

  hideError = (input : HTMLInputElement): void => {
    const inputWrap = input.closest('.input-wrap');
    inputWrap.querySelector('label').style.color = '';
    inputWrap.querySelector('.error').textContent = '';
  };
}
