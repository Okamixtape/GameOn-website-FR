// function for a responsive nav
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBody = document.querySelector(".modal-body");
const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");


// modal behaviour

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/////////////////////////////////////
//                                 //
//  1st Issue : close modal form   //
//                                 //
/////////////////////////////////////

// close modal form
closeBtn.addEventListener('click', (e)=> {
  modalbg.style.display = "none";
})


/////////////////////////////////////////
//                                     //
//  2nd Issue : implement form inputs  //
//                                     //
/////////////////////////////////////////

// retrieving form's input's IDs
const allInputs = form.querySelectorAll("input");

const firstInput = document.getElementById("first");
const lastInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const chosenCity = document.getElementById("chooseYourCity");
const termsOfUseCheckbox = document.getElementById("checkbox1");
const newsletterCheckbox = document.getElementById("checkbox2");

const submitBtn = document.querySelector('.btn-submit');

// form is submitted when we click on "submitBtn"
form.addEventListener('submit', validate);

// form validation function
function validate() {

  // retrieve form's input's values
  const form = document.querySelector("form");

  // use of the FormData interface to construct sets of key/value pairs
  const formData = new FormData(form);

  const first = formData.get("first");
  const last = formData.get("last");
  const email = formData.get("email");
  const birthdate = formData.get("birthdate");
  const quantity = formData.get("quantity");
  const location = formData.get("location");

  // form validation's conditions
  if (first.length <= 2) {
    displayErrorMessage(firstInput, "Veuillez entrer 2 caractères ou plus.");
    return false;
  }

  if (last.length <= 2) {
    displayErrorMessage(lastInput, "Veuillez entrer 2 caractères ou plus.");
    return false;
  }

  if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    displayErrorMessage(emailInput, "Veuillez saisir une adresse courriel valide.");
    return false;
  }

  const dateTime = new Date(birthdate).getTime();
  if (isNaN(dateTime)) {
    displayErrorMessage(birthdateInput, "Veuillez entrer votre date de naissance.");
    return false;
  }

  if (isNaN(new Number(quantity)) || quantity === "") {
    displayErrorMessage(quantityInput, "Veuillez entrer un nombre.");
    return false;
  }

  if (location === null) {
    displayErrorMessage(chosenCity, "Veuillez choisir une ville.");
    return false;
  }

  if (!termsOfUseCheckbox.checked) {
    displayErrorMessage(termsOfUseCheckbox, "Veuillez cocher la case indiquant que vous acceptez les conditions d'utilisation.");
    return false;
  }

  return true;
}


///////////////////////////////////////
//                                   //
// 3rd Issue : error message display //
//                                   //
///////////////////////////////////////

// error message creation
function createErrorMessage() {
  const errorMessage = document.createElement("span");
  errorMessage.classList.add("errorMessage");
  errorMessage.style.cssText = "color: #D8000C; font-size: 12px; line-height: 12px";
  return errorMessage;
}

// error message display
function displayErrorMessage(input, errorText) {
  errorMessage = createErrorMessage();
  errorMessage.innerHTML = errorText;
  input.after(errorMessage);
  input.style.outline = "2px solid #D8000C";
}

// error message deletion
function deleteErrorMessages() {
  let errorMessages = document.querySelectorAll(".errorMessage");
  // suppressing red border with a loop
  chosenCity.style.outline = "none";
  for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].style.outline = "none";
  }
  // suppressing in the DOM error messages
  for (let i = 0; i < errorMessages.length; i++) {
    errorMessages[i].remove();
  }
}

// stop the validation if there is an error
let validationRequired = false;

// checking every input without validating the form
for (let i = 0; i < allInputs.length; i++) {
  const input = allInputs[i];
  input.addEventListener("input", () => {
    if (validationRequired === false) return;
    validate(false);
  });
}

// if the form is not valid we prevent default form behaviour
form.onsubmit = (event) => {
  const valid = validate();
  if (valid === false) {
    event.preventDefault();
  }
};