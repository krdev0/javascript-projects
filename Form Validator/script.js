const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(inputField, msg) {
    const formControl = inputField.parentElement;
    const errorField = formControl.querySelector('small');
    formControl.classList.add("error");
    errorField.textContent = msg;
}

function showSuccess(inputField) {
    const formControl = inputField.parentElement;
    formControl.classList.add("success");
}

function isValidEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    
    if(username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    if(email.value === '' ) {
        showError(email, 'email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid')
    }
     else {
        showSuccess(email);
    }

    if(password.value === '') {
        showError(password, 'password is required');
    } else {
        showSuccess(password);
    }

    if(password2.value === '') {
        showError(password2, 'password2 is required');
    } else {
        showSuccess(password2);
    }
});

console.log(isValidEmail('abc.com'));
