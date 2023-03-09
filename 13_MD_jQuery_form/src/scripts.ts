const userNameRegEx = /^(?!.*[_.].*[_.])(?=[a-zA-Z0-9._]{2,50}$)[^_.].*[^_.]$/;
const emailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export default function validateForm() {
  $('#form').on('submit', (e) => {
    e.preventDefault();
    const inputNameValue = $('#inputName').val();
    const inputError = $('.errorUsername');
    const inputEmailValue = $('#inputEmail').val();
    const inputEmailError = $('.errorEmail');
    const inputPasswordValue = $('#inputPassword').val();
    const inputPasswordError = $('.errorPassword');

    if (!inputNameValue.toString().match(userNameRegEx)) {
      inputError.html('The name must have at least 2 characters and can only contain letters.');
    } else {
      inputError.hide();
    }

    if (!inputEmailValue.toString().match(emailRegEx)) {
      inputEmailError.html('The email must be in a valid format (e.g. example@example.com)');
    } else {
      inputEmailError.hide();
    }

    if (!inputPasswordValue.toString().match(passwordRegEx)) {
      inputPasswordError.html('The password must be at least 8 characters long and must contain at least 1 number and 1 special character (!, @, #, $, %, ^, &, *).');
    } else {
      inputPasswordError.hide();
    }
  });
}

validateForm();
