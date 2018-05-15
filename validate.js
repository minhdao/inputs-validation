console.log('validate.js loaded ...');

let requiredInputs = document.querySelectorAll('.required');
let emails = document.querySelectorAll('.email');
let phones = document.querySelectorAll('.phone');
let passwords = document.querySelectorAll('.password');

// add event listener for the required inputs
requiredInputs.forEach((input) => {
    input.addEventListener('input', (event) => {
        input.value = prepareInput(input.value);
        if (emptyInput(input.value)) {
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = 'green';
        }
    });
});

// add event listener for email
emails.forEach((email) => {
    email.addEventListener('input', (event) => {
        email.value = prepareInput(email.value);
        if (validEmail(email.value)) {
            email.style.borderColor = 'green';
        } else {
            email.style.borderColor = 'red';
        }
    });
});

// add event listener for phone
phones.forEach((phone) => {
    phone.addEventListener('input', (event) => {
        phone.value = prepareInput(phone.value);
        if (validPhone(phone.value)) {
            phone.style.borderColor = 'green';
        } else {
            phone.style.borderColor = 'red';
        }
    });
});

// add event listner for passwords
passwords.forEach((password) => {
    password.addEventListener('input', (event) => {
        password.value = prepareInput(password.value);
        if (validPasswords(passwords[0].value, passwords[1].value)) {
            passwords[0].style.borderColor = 'green';
            passwords[1].style.borderColor = 'green';
        } else {
            passwords[0].style.borderColor = 'red';
            passwords[1].style.borderColor = 'red';
        }
    });
});

/**
 * [checkEmpty for empty inputs - used when submit the form]
 * @param  {[array]} array [array of inputs]
 * @return {[boolean]}       [true if emptyCount > 0, false otherwise]
 */
let checkEmpty = (inputs) => {
    let emptyCount = 0;
    inputs.forEach((input) => {
        if (input.value.trim() === '') {
            input.style.borderColor = 'red';
            emptyCount++;
        }
    });
    // return true if count is > 0
    if (emptyCount > 0) {
        return true;
    } else {
        return false;
    }
};

// validate inputs when form submitted
document.querySelector('#myform').addEventListener('submit', (event) => {
    // disable default form reload
    event.preventDefault();
    // make sure nothing is empty
    checkEmpty(requiredInputs);
    checkEmpty(emails);
    checkEmpty(phones);
    checkEmpty(passwords);
});