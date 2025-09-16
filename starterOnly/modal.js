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
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locations = document.querySelectorAll('input[name="location"]');
const termsOfUse = document.getElementById("checkbox1");
const submitBtn = document.querySelector(".btn-submit");

// Modal Behaviour
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
  // Reset form state when opening modal
  form.style.display = "block";
  const thankYouContainer = modalBody.querySelector(".thank-you-container");
  if (thankYouContainer) {
    thankYouContainer.remove();
  }
  form.reset();
  clearAllErrorMessages();
  modalbg.style.display = "block";
}));

closeBtn.addEventListener('click', () => {
    modalbg.style.display = "none";
});

// Helper functions for error display
function setErrorMessage(inputElement, message) {
  inputElement.parentElement.setAttribute("data-error", message);
  inputElement.parentElement.setAttribute("data-error-visible", "true");
}

function clearAllErrorMessages() {
    formData.forEach((el) => {
        el.setAttribute("data-error-visible", "false");
        el.removeAttribute("data-error");
    });
}

// Form validation check function
function formValidationCheck() {
  clearAllErrorMessages();
  let isValid = true;

  // First Name validation
  if (firstName.value.trim().length < 2) {
    setErrorMessage(firstName, "Veuillez entrer 2 caractères ou plus pour le prénom.");
    isValid = false;
  }

  // Last Name validation
  if (lastName.value.trim().length < 2) {
    setErrorMessage(lastName, "Veuillez entrer 2 caractères ou plus pour le nom.");
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email.value.trim())) {
    setErrorMessage(email, "Veuillez saisir une adresse courriel valide.");
    isValid = false;
  }

  // Birthdate validation
  if (birthdate.value.trim() === "") {
    setErrorMessage(birthdate, "Veuillez entrer votre date de naissance.");
    isValid = false;
  }

  // Quantity validation
  if (quantity.value.trim() === "" || !Number.isInteger(Number(quantity.value))) {
    setErrorMessage(quantity, "Veuillez entrer un nombre entier pour les tournois.");
    isValid = false;
  }

  // Location validation
  let locationChecked = false;
  locations.forEach(location => {
    if (location.checked) {
      locationChecked = true;
    }
  });
  if (!locationChecked) {
    setErrorMessage(locations[0], "Veuillez choisir une ville.");
    isValid = false;
  }

  // Terms of use validation
  if (!termsOfUse.checked) {
    setErrorMessage(termsOfUse, "Veuillez accepter les conditions d'utilisation.");
    isValid = false;
  }

  return isValid;
}

// Display thank you message
function displayThankYouMessage() {
  // Hide the form
  form.style.display = "none";

  // Create and display the thank you message
  const thankYouContainer = document.createElement("div");
  thankYouContainer.className = "thank-you-container"; // Add a class for easier selection
  thankYouContainer.style.cssText = "display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center;";

  const thankYouText = document.createElement("p");
  thankYouText.textContent = "Merci ! Votre inscription a bien été reçue.";
  thankYouText.style.fontSize = "1.2rem";
  thankYouText.style.padding = "20px";

  const closeButton = document.createElement("button");
  closeButton.textContent = "Fermer";
  closeButton.className = "btn-submit";

  thankYouContainer.appendChild(thankYouText);
  thankYouContainer.appendChild(closeButton);

  modalBody.appendChild(thankYouContainer);

  // Add event listener to the close button
  closeButton.addEventListener("click", () => {
    modalbg.style.display = "none";
  });
}

// Form submission handler
// Form submission handler
form.addEventListener("submit", (event) => {
  event.preventDefault();
  submitBtn.disabled = true; // Disable button on click

  if (formValidationCheck()) {
    displayThankYouMessage();
  } else {
    submitBtn.disabled = false; // Re-enable if validation fails
  }
});