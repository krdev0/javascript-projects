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

function checkEmail(input) {
    const re = /\S+@\S+\.\S+/;
    
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required!`);
        } else {
            showSuccess(input);
        }
    });
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkInputLength(input, min) {
    if(input.value.length < min ) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordsMatch(password, password2) {
    if(!password.value === password2.value) {
        showError(password2, 'Passwords do not match');
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault();

   checkRequired([username, email, password, password2]);
   checkInputLength(username, 3);
   checkInputLength(password, 6);
   checkInputLength(password2, 6);
   checkEmail(email);
   checkPasswordsMatch(password, password2);
});
