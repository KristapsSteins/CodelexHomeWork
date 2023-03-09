import { validateName, validateEmail, validatePassword } from './form-validation';

describe('validateName', () => {
  it('should display error message for empty string', () => {
    const inputNameValue = '';
    const inputError = {
      html: jest.fn(),
    };
    validateName(inputNameValue, inputError);
    expect(inputError.html).toHaveBeenCalledWith('The name must have at least 2 characters and can only contain letters.');
  });
  it('should display error message for more than 50 characters', () => {
    const inputNameValue = 'adssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss';
    const inputError = {
      html: jest.fn(),
    };
    validateName(inputNameValue, inputError);
    expect(inputError.html).toHaveBeenCalledWith('The name must have at least 2 characters and can only contain letters.');
  });
  it('should hide error message for valid username', () => {
    const inputNameValue = 'Kristaps';
    const inputError = {
      hide: jest.fn(),
    };
    validateName(inputNameValue, inputError);
    expect(inputError.hide).toHaveBeenCalled();
  });
});

describe('validateEmail', () => {
  it('should display error message for empty string', () => {
    const inputEmailValue = '';
    const inputEmailError = {
      html: jest.fn(),
    };
    validateEmail(inputEmailValue, inputEmailError);
    expect(inputEmailError.html).toHaveBeenCalledWith('The email must be in a valid format (e.g. example@example.com)');
  });
  it('should display error message without @ symbol', () => {
    const inputEmailValue = 'adssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss';
    const inputEmailError = {
      html: jest.fn(),
    };
    validateEmail(inputEmailValue, inputEmailError);
    expect(inputEmailError.html).toHaveBeenCalledWith('The email must be in a valid format (e.g. example@example.com)');
  });
  it('should hide error message for valid email', () => {
    const inputEmailValue = 'kristaps@codelex.lv';
    const inputEmailError = {
      hide: jest.fn(),
    };
    validateEmail(inputEmailValue, inputEmailError);
    expect(inputEmailError.hide).toHaveBeenCalled();
  });
});

describe('validatePassword', () => {
  it('should display error message for empty string', () => {
    const inputPasswordValue = '';
    const inputPasswordError = {
      html: jest.fn(),
    };
    validatePassword(inputPasswordValue, inputPasswordError);
    expect(inputPasswordError.html).toHaveBeenCalledWith('The password must be at least 8 characters long and must contain at least 1 number and 1 special character (!, @, #, $, %, ^, &, *).');
  });
  it('should display error message if the password is less than 8 characters', () => {
    const inputPasswordValue = 'horse';
    const inputPasswordError = {
      html: jest.fn(),
    };
    validatePassword(inputPasswordValue, inputPasswordError);
    expect(inputPasswordError.html).toHaveBeenCalledWith('The password must be at least 8 characters long and must contain at least 1 number and 1 special character (!, @, #, $, %, ^, &, *).');
  });
  it('should hide error message for valid password', () => {
    const inputPasswordValue = 'Kristaps1!';
    const inputPasswordError = {
      hide: jest.fn(),
    };
    validatePassword(inputPasswordValue, inputPasswordError);
    expect(inputPasswordError.hide).toHaveBeenCalled();
  });
});
