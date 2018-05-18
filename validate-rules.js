console.log('validate-functions.js loaded ...');

/**
 * [ValidationResult object constructor]
 * @param  {Boolean}   isValid [true if input is valid, false other wise]
 * @param  {[string]}  text    [text to be display]
 * @param  {[string]}  color   [border color of the input]
 * @return {[Object]}          [ValidationResult]
 */
let ValidationResult = function(isValid, text, color) {
    this.isValid = isValid;
    this.text = text;
    this.color = color;
};

/**
 * [prepareInput remove extra spaces for each input]
 * @param  {[string]} input [input from user]
 * @return {[type]}         [no return]
 */
let prepareInput = (input) => {
    return input.trim();
};

/**
 * [emptyInput check if an input is '' value]
 * @param  {[string]}  input [HTML input element]
 * @return {Promise}       [true if '' value, false otherwise]
 */
let emptyInput = (input) => {
    if (input === '') {
        return new ValidationResult(false, 'Such empty :(', 'red');
    } else {
        return new ValidationResult(true, 'Looks good :)', 'green');
    }
};

/**
 * [validEmail check if email passes regex defined]
 * @param  {[string]} email [email provided]
 * @return {[boolean]}       [true if passes regex, false otherwise]
 */
let validEmail = (email) => {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emptyInput(email)) {
        return false;
    }
    if (!regex.test(email)) {
        return false;
    }
    return true;
};

/**
 * [validPhone check if phone passes regex defined]
 * @param  {[string]} phone [string of numbers]
 * @return {[type]}       [description]
 */
let validPhone = (phone) => {
    let regex = /[0-9]/;
    if (emptyInput(phone)) {
        return false;
    }
    if (!regex.test(phone)) {
        return false;
    }
    return true;
};

/**
 * [matchedPasswords check if passwords are valid and match each other]
 * @param  {[string]} password1 [first password]
 * @param  {[string]} password2 [second password]
 * @return {[boolean]}          [return true if valid, false otherwise]
 */
let validPasswords = (password1, password2) => {
    let regex = /^[a-zA-Z0-9!@#$%^&*]{6,}/;
    if (emptyInput(password1) || emptyInput(password2)) {
        return false;
    }
    if (!regex.test(password1) || !regex.test(password2)) {
        return false;
    }
    if (password1 === '' || password2 === '') {
        return false;
    }
    if (!(password1 === password2)) {
        return false;
    }
    return true;
};