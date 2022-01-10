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

// Form Inputs / retrieving form's input's IDs
const allInputs = form.querySelectorAll("input");

const firstInput = document.getElementById("first");
const lastInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const chosenCity = document.getElementById("chosenCity");
const termsOfUseCheckbox = document.getElementById("checkbox1");
const newsletterCheckbox = document.getElementById("checkbox2");

const submitBtn = document.querySelector('.btn-submit');

///// Modal Behaviour /////

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

// form validation check function
function formValidationCheck() {
  validationRequired = true;
  deleteErrorMessages();

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
  if (first.length < 2) {
    displayErrorMessage(firstInput, "Veuillez entrer 2 caractères ou plus.");
    return false;
  }

  if (last.length < 2) {
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
    displayErrorMessage(newsletterCheckbox, "Veuillez cocher la case des conditions d'utilisation.");
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
  errorMessage.classList.add("error-message");
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
  let errorMessages = document.querySelectorAll(".error-message");
  // suppressing red border and outline with a loop
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
    formValidationCheck();
  });
}


//////////////////////////////////////////
//                                      //
// 4th Issue : display modal TY message //
//                                      //
//////////////////////////////////////////

// modal thank you message creation
function createThankYouModal() {
  // creating a new modal from the original one
  const newModal = modalbg.cloneNode(true);
  const modalBody = newModal.querySelector(".modal-body");
  const closeIcon = newModal.querySelector(".close");
  const form = modalBody.querySelector("form");

  // removing the form from the modal
  form.remove();

  // new modal CSS
  newModal.style.display = "block";
  modalBody.style.cssText = "display: flex; flex-direction: column;";

  // thank you paragraph creation
  const thankYouText = document.createElement("p");
  thankYouText.innerHTML = "Merci pour votre participation à notre tournoi !";
  thankYouText.style.cssText = "text-align: center; padding: 36px 8px";

  // thank you button creation
  const thankYouButton = document.createElement("button");
  thankYouButton.classList.add("btn-submit");
  thankYouButton.classList.add("final-submit");
  thankYouButton.style.cssText = "margin: 4px 12px; text-align: center;";
  thankYouButton.innerHTML = "Revenir sur la page d'accueil";

  // adding modal's content and the new modal in the DOM
  modalBody.appendChild(thankYouText);
  modalBody.appendChild(thankYouButton);
  modalbg.after(newModal);

  // closing the modal by clicking on the button or the close icon
  thankYouButton.addEventListener("click", () => newModal.remove());
  closeIcon.addEventListener("click", () => newModal.remove());
}


// thank you message display management
const displayThankYouMessage = "displayThankYouMessage";

// getting thank you message from the sessionStorage
const getThankYouModal = sessionStorage.getItem(
  displayThankYouMessage
);

if (getThankYouModal === "true") {
  // prevent the modal display when the page reloads
  sessionStorage.setItem(displayThankYouMessage, "false");
  createThankYouModal();
}


// form validation management
form.onsubmit = (event) => {
  const validationCheck = formValidationCheck();
  if (validationCheck === false) {
    // prevent form usual behaviour (page regeneration and data deletion)
    event.preventDefault();
  } else {
    // store the thank you message into sessionStorage
    sessionStorage.setItem(displayThankYouMessage, "true");
  }
};
