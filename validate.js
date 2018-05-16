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
            addFeedback(input, false, 'Cannot be empty :(');
        } else {
            input.style.borderColor = 'green';
            addFeedback(input, true, 'Looks good :)');
        }
    });
});

// add event listener for email
emails.forEach((email) => {
    email.addEventListener('input', (event) => {
        email.value = prepareInput(email.value);
        if (validEmail(email.value)) {
            email.style.borderColor = 'green';
            addFeedback(email, true, 'Looks good :)');
        } else {
            email.style.borderColor = 'red';
            addFeedback(email, false, 'Looks like empty for bad format :(');
        }
    });
});

// add event listener for phone
phones.forEach((phone) => {
    phone.addEventListener('input', (event) => {
        phone.value = prepareInput(phone.value);
        if (validPhone(phone.value)) {
            phone.style.borderColor = 'green';
            addFeedback(phone, true, 'Look good :)');
        } else {
            phone.style.borderColor = 'red';
            addFeedback(phone, false, 'Bad format :(');
        }
    });
});

// add event listner for passwords
passwords.forEach((password) => {
    password.addEventListener('input', (event) => {
        password.value = prepareInput(password.value);
        if (validPasswords(passwords[0].value, passwords[1].value)) {
            passwords[0].style.borderColor = 'green';
            addFeedback(passwords[0], true, 'Look good :)');
            passwords[1].style.borderColor = 'green';
            addFeedback(passwords[1], true, 'Look good :)');
        } else {
            passwords[0].style.borderColor = 'red';
            addFeedback(passwords[0], false, 'Empty or not matched :(');
            passwords[1].style.borderColor = 'red';
            addFeedback(passwords[1], false, 'Empty or not matched :(');
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

/**
 * [insertAfter insert a DOM nodeB after nodeA]
 * @param  {[DOM]} parent [parent node of nodeA and nodeB]
 * @param  {[DOM]} nodeA  [node already exist inside parent]
 * @param  {[DOM]} nodeB  [new node to be added after nodeA]
 * @return {[type]}       [no return]
 */
let insertAfter = (parent, nodeA, nodeB) => {
    // make sure nodeA is the last element of the parent node for this to work
    // nodeA.nextSibling is null since nodeA is the last node inside parent
    // adding before null means adding after nodeA
    parent.insertBefore(nodeB, nodeA.nextSibling);
};

/**
 * [clearFeedback clear old feedback before adding in new one]
 * @param  {[DOM]} parent  [parent node of be input being validated]
 * @return {[type]}        [no return]
 */
let clearFeedback = (parent) => {
    let oldFeedback = parent.querySelector('.feedback');
    // make sure oldFeedback exist before trying to delete
    if (oldFeedback !== null) {
        parent.removeChild(oldFeedback);
    }
};

/**
 * [addFeedback add feedback for each input validated]
 * @param {[DOM]}  input    [input being validated]
 * @param {Boolean} isValid [input is valid or not]
 * @param {[string]}  text  [feedback for user to read]
 */
let addFeedback = (input, isValid, text) => {
    let parentNode = input.parentNode;
    let feedback = document.createElement('div');
    if (isValid) {
        feedback.classList.add('valid-feedback');
    } else {
        feedback.classList.add('invalid-feedback');
    }
    feedback.innerHTML = text;
    // make sure the feedback is seen
    feedback.style.display = 'block';
    // add in custom identifier for feedback div
    feedback.classList.add('feedback');
    // clear old feedback before add in new one
    clearFeedback(parentNode);
    // insert feedback after input
    insertAfter(parentNode, input, feedback);
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