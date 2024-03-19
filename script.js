const nameInputJS = document.getElementById("nameInput");
const nameErrorJS = document.getElementById("nameError");

const emailInputJS = document.getElementById("emailInput");
const emailErrorJS = document.getElementById("emailError");

const passwordInput1JS = document.getElementById("passwordInput1");
const passwordError1JS = document.getElementById("passwordError1");

const passwordInput2JS = document.getElementById("passwordInput2");
const passwordError2JS = document.getElementById("passwordError2");

const totalErrorJS = document.getElementById("totalError");
const submitButtonJS = document.getElementById("submitButton");

// Function to clear all error messages
function clearErrors() {
  nameErrorJS.innerHTML = "";
  emailErrorJS.innerHTML = "";
  passwordError1JS.innerHTML = "";
  passwordError2JS.innerHTML = "";
  totalErrorJS.innerHTML = "";
}

// Submit button event listener
submitButtonJS.addEventListener("click", function (event) {

  clearErrors(); // Clear any previous errors before validation

  const nameValue = nameInputJS.value.trim();
  const emailValue = emailInputJS.value.trim();
  const password1Value = passwordInput1JS.value.trim();
  const password2Value = passwordInput2JS.value.trim();

  let hasError = false; // Flag to track if there are any errors

  if (nameValue === "") {
    nameErrorJS.innerHTML = "Name cannot be blank.";
    hasError = true;
  }

  if (emailValue === "") {
    emailErrorJS.innerHTML = "Email address cannot be blank.";
    hasError = true;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    emailErrorJS.innerHTML = "Invalid email format.";
    hasError = true;
  }

  if (password1Value === "") {
    passwordError1JS.innerHTML = "Password cannot be blank.";
    hasError = true;
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).{8,}$/.test(password1Value)) {
    passwordError1JS.innerHTML = "Password must meet complexity requirements.";
    hasError = true;
  }

  if (password2Value === "") {
    passwordError2JS.innerHTML = "Confirm password cannot be blank.";
    hasError = true;
  } else if (password1Value !== password2Value) {
    passwordError2JS.innerHTML = "Passwords do not match.";
    hasError = true;
  }

  if (hasError) {
    totalErrorJS.innerHTML = "Please fix the errors in the form.";
    event.preventDefault(); // Prevent form submission if there are errors
  }
});

// Handle input changes to clear specific error messages as user types
nameInputJS.addEventListener("input", clearErrors);
emailInputJS.addEventListener("input", clearErrors);
passwordInput1JS.addEventListener("input", clearErrors);
passwordInput2JS.addEventListener("input", clearErrors);
