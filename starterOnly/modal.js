// Responsive nav function
function editNav() {
  const x = document.getElementById("myTopnav");
  x.className === "topnav"
    ? (x.className += " responsive")
    : (x.className = "topnav");
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBody = document.querySelector(".modal-body");
const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// Form Inputs
const allInputs = Array.from(form.querySelectorAll("input"));

const formElements = {
  firstInput: document.getElementById("first"),
  lastInput: document.getElementById("last"),
  emailInput: document.getElementById("email"),
  birthdateInput: document.getElementById("birthdate"),
  quantityInput: document.getElementById("quantity"),
  chosenCity: document.getElementById("chosenCity"),
  termsOfUseCheckbox: document.getElementById("checkbox1"),
  newsletterCheckbox: document.getElementById("checkbox2"),
};

const submitBtn = document.querySelector(".btn-submit");

// Modal Behaviour
modalBtn.forEach((btn) => btn.addEventListener("click", () => (modalbg.style.display = "block")));
closeBtn.addEventListener('click', () => (modalbg.style.display = "none"));

// Form validation check function
function formValidationCheck() {
  deleteErrorMessages();

  const formData = new FormData(form);

  const { first, last, email, birthdate, quantity, location } = Object.fromEntries(formData);

  const errorMessages = {
    first: "Veuillez entrer 2 caractères ou plus.",
    last: "Veuillez entrer 2 caractères ou plus.",
    email: "Veuillez saisir une adresse courriel valide.",
    birthdate: "Veuillez entrer votre date de naissance.",
    quantity: "Veuillez entrer un nombre.",
    location: "Veuillez choisir une ville.",
    termsOfUseCheckbox: "Veuillez cocher la case des conditions d'utilisation.",
  };

  for (const [fieldName, fieldValue] of Object.entries(formElements)) {
    if (fieldName === 'location' && fieldValue.value === null) {
      displayErrorMessage(fieldValue, errorMessages[fieldName]);
      return false;
    }

    if (fieldName === 'birthdate' && isNaN(new Date(fieldValue).getTime())) {
      displayErrorMessage(fieldValue, errorMessages[fieldName]);
      return false;
    }

    if (fieldName === 'quantity' && (isNaN(Number(fieldValue)) || fieldValue === "")) {
      displayErrorMessage(fieldValue, errorMessages[fieldName]);
      return false;
    }

    if (fieldName === 'email' && !fieldValue.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      displayErrorMessage(fieldValue, errorMessages[fieldName]);
      return false;
    }

    if ((fieldName === 'first' || fieldName === 'last') && fieldValue.length < 2) {
      displayErrorMessage(fieldValue, errorMessages[fieldName]);
      return false;
    }
  }

  return true;
}

// Error message creation
function createErrorMessage() {
  const errorMessage = document.createElement("span");
  errorMessage.classList.add("error-message");
  return errorMessage;
}

// Error message display
function displayErrorMessage(input, errorText) {
  const errorMessage = createErrorMessage();
  errorMessage.innerHTML = errorText;
  input.after(errorMessage);
  input.style.outline = "2px solid #D8000C";
}

// Error message deletion
function deleteErrorMessages() {
  const errorMessages = document.querySelectorAll(".error-message");
  formElements.chosenCity.style.outline = "none";
  allInputs.forEach((input) => (input.style.outline = "none"));
  errorMessages.forEach((errorMessage) => errorMessage.remove());
}

// Check input validation on input change
allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (validationRequired === false) return;
    formValidationCheck();
  });
});

// Modal thank you message creation
function createThankYouModal() {
  const newModal = modalbg.cloneNode(true);
  const modalBody = newModal.querySelector(".modal-body");
  const closeIcon = newModal.querySelector(".close");
  const form = modalBody.querySelector("form");

  form.remove();
  
  newModal.style.display = "block";
  modalBody.style.cssText = "display: flex; flex-direction: column;";

  const thankYouText = document.createElement("p");
  thankYouText.innerHTML = "Merci pour votre participation à notre tournoi !";
  thankYouText.style.cssText = "text-align: center; padding: 36px 8px";

  const thankYouButton = document.createElement("button");
  thankYouButton.classList.add("btn-submit");
  thankYouButton.classList.add("final-submit");
  thankYouButton.style.cssText = "margin: 4px 12px; text-align: center;";
  thankYouButton.innerHTML = "Revenir sur la page d'accueil";

  modalBody.appendChild(thankYouText);
  modalBody.appendChild(thankYouButton);
  modalbg.after(newModal);

  thankYouButton.addEventListener("click", () => newModal.remove());
  closeIcon.addEventListener("click", () => newModal.remove());
}

const displayThankYouMessage = "displayThankYouMessage";
const getThankYouModal = sessionStorage.getItem(displayThankYouMessage);

if (getThankYouModal === "true") {
  sessionStorage.setItem(displayThankYouMessage, "false");
  createThankYouModal();
}

form.onsubmit = (event) => {
  const validationCheck = formValidationCheck();
  if (validationCheck === false) {
    event.preventDefault();
  } else {
    sessionStorage.setItem(displayThankYouMessage, "true");
  }
};
