let emailInputElement = document.getElementById("email");
let passInputElement = document.getElementById("pass");
let checkboxElement = document.getElementById("check");
let warningMessageElement = document.getElementById("warningMessage");
let formElement = document.getElementById("form");

// Messages
let requiredMessage = "Required field.";
let invalidEmailMessage = "Invalid email format.";
let loginSuccessMessage = "Sign in successful!";
let loginFailedMessage = "Sign in failed. Please check details.";

// Always keep message background white
warningMessageElement.style.backgroundColor = "white";

// Toggle password visibility
checkboxElement.addEventListener("change", function () {
    passInputElement.type = checkboxElement.checked ? "text" : "password";
});

// Form submit handling
formElement.addEventListener("submit", function (event) {
    event.preventDefault();

    warningMessageElement.textContent = ""; 
    warningMessageElement.style.color = "red";
    warningMessageElement.style.backgroundColor = "white";

    let emailValue = emailInputElement.value.trim();
    let passwordValue = passInputElement.value.trim();

    // Email required
    if (emailValue === "") {
        warningMessageElement.textContent = requiredMessage;
        return;
    }

    // Email format check
    if (!/\S+@\S+\.\S+/.test(emailValue)) {
        warningMessageElement.textContent = invalidEmailMessage;
        return;
    }

    // Password required
    if (passwordValue === "") {
        warningMessageElement.textContent = requiredMessage;
        return;
    }

    // Successful login
    warningMessageElement.style.color = "green";
    warningMessageElement.textContent = loginSuccessMessage;

    // Reset fields
    emailInputElement.value = "";
    passInputElement.value = "";
    checkboxElement.checked = false;
    passInputElement.type = "password";
});
