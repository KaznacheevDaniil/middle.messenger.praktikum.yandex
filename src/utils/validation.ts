export class Validation {
  password = (value: string): boolean => {
    return (
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,40}$/.test(
        value
      ) && !this.checkEmptyValue(value)
    );
  };
  phone = (value: string): boolean => {
    return (
      this.checkLength(10, 15, value) &&
      /^[+]?[0-9]+$/.test(value) &&
      !this.checkEmptyValue(value)
    );
  };
  message = (value: string): boolean => {
    return this.checkEmptyValue(value);
  };
  email = (value: string): boolean => {
    return (
      /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(value) &&
      !this.checkEmptyValue(value)
    );
  };
  login = (value: string): boolean => {
    return (
      this.checkLength(3, 20, value) &&
      /^[A-Za-z0-9_-]+$/.test(value) &&
      !this.checkValueOnNumbers(value)
    );
  };
  names = (value: string): boolean => {
    return (
      /^[A-ZА-Я]+[A-Za-zа-яА-Я-]+$/.test(value) && !this.checkEmptyValue(value)
    );
  };

  confirmPassword = (input, value: string): boolean => {
    return (
      input.closest(".info-fields").querySelector("input[name=password]")
        .value === value
    );
  };

  check = (form): boolean => {
    let valid = true;
    let inputs = form.querySelectorAll("input[data-valid=true]");
    inputs.forEach((input) => {
      if (
        !this[
          input.name === "first_name" || input.name === "second_name"
            ? "names"
            : input.name
        ](input.value)
      ) {
        valid = false;
        this.showError(input);
      }
    });
    return valid;
  };

  // utils functions

  checkLength = (min: number, max: number, value: string): boolean => {
    return value.length >= min && value.length <= max;
  };

  checkEmptyValue = (value: string): boolean => {
    return value.length === 0;
  };

  checkValueOnNumbers = (value: string): boolean => {
    return /^\d+$/.test(value);
  };

  showError = (input, message?: string): void => {
    let label = input.closest(".input-wrap").querySelector("label");
    let errorContainer = input.closest(".input-wrap").querySelector(".error");
    label.style.color = "red";
    if (!message) {
      errorContainer.textContent = `${input.name} is not required!`;
    } else {
      errorContainer.textContent = message;
    }
  };

  hideError = (input): void => {
    input.closest(".input-wrap").querySelector("label").style.color = "";
    input.closest(".input-wrap").querySelector(".error").textContent = "";
  };
}
