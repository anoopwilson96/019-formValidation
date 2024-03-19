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

/* 
<span id="nameError">Name cannot be blank.</span>
<span id="emailError">Email address cannot be blank.</span>
<span id="passwordError1">Password must contain at least one uppercase letter, one lowercase letter, one special character, one digit, and be at least 8 characters long.</span>
<span id="totalError">Please fill in all required fields.</span>
*/

//submit button if everything is empty.

submitButtonJS.addEventListener("click", function (event) {

  fillAll()
  event.preventDefault(); /*to avoid refresh*/

});

function fillAll() {
  if (
    !nameInputJS.value ||
    !emailInputJS.value ||
    !passwordInput1JS.value ||
    !passwordInput2JS
  ) {
    // Display error message:
    nameErrorJS.innerHTML = "Name cannot be blank.";
    emailErrorJS.innerHTML = "Email address cannot be blank.";
    passwordError1JS.innerHTML =
      "Password must contain at least one uppercase letter, one lowercase letter, one special character, one digit, and be at least 8 characters long. ";
    passwordError2JS.innerHTML =
      "Password must contain at least one uppercase letter, one lowercase letter, one special character, one digit, and be at least 8 characters long. ";
    totalErrorJS.innerHTML = "Please fill in all required fields.";
  
  }

}

