/* const cbook_id = document.querySelector('#booking_id');
const chotel_id = document.querySelector('#hotel_id');
const cusername = document.querySelector('#username');
const cbook_from = document.querySelector('#checkin-date');
const cbook_to = document.querySelector('#checkout-date');
const cadults = document.querySelector('#no_of_adults');
const cchilds = document.querySelector('#no_of_children');
const ctotal_amt = document.querySelector('#total_amount');

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

});

const showError = (input, message) => {
    // get the form-field element
    const formGroup = input.parentElement;
    // add the error class
    formGroup.classList.remove('success');
    formGroup.classList.add('error');

    // show the error message
    const error = formGroup.querySelector('small');
    error.textContent = message;
};

//utility functions to use in validation methods
const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

//validate booking-id
const checkBooking = () => {

    const book_id = cbook_id.value.trim();

    if (!isRequired(book_id)) {
        showError(cbook_id, 'booking id cannot be blank.');
    }else {
        showSuccess(cbook_id);
        valid = true;
    }
    return valid;
}

//validate hotel-id
const checkHotel = () => {

    const hotel_id = chotel_id.value.trim();

    if (!isRequired(hotel_id)) {
        showError(chotel_id, 'hotel id cannot be blank.');
    }else {
        showSuccess(chotel_id);
        valid = true;
    }
    return valid;
}

//validate username
const checkUsername = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const username = cusername.value.trim();

    if (!isRequired(username)) {
        showError(cusername, 'username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(cusername, `username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(cusername);
        valid = true;
    }
    return valid;
}

    
//validate adults digits
const checkAdults = () => {

    let valid = false;
    const min = 0,
        max = 1;
    const username = cusername.value.trim();

    if (!isRequired(username)) {
        showError(cusername, 'field cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(cusername, `field no of digits must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(cusername);
        valid = true;
    }
    return valid;
}

//validate children digits
const checkChilds = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const username = cusername.value.trim();

    if (!isRequired(username)) {
        showError(cusername, 'field cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(cusername, `field no of digits must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(cusername);
        valid = true;
    }
    return valid;
}

//validate total amount
const checkTotalAmt = () => {

    let valid = false;
    const min = 1,
        max = 6;
    const total_amt = ctotal_amt.value.trim();

    if (!isRequired(total_amt)) {
        showError(ctotal_amt, 'total amount cannot be blank.');
    } else if (!isBetween(total_amt.length, min, max)) {
        showError(ctotal_amt, `total amount must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(ctotal_amt);
        valid = true;
    }
    return valid;
}

 */