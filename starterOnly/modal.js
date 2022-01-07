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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// #1st Issue : close modal form
closeBtn.addEventListener('click', (e)=> {
  modalbg.style.display = "none";
})

// #2nd Issue : implement form inputs

// retrieving form's input's IDs

const allInputs = form.querySelectorAll("input");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const chosenCity = document.getElementById("chooseYourCity");
const termsOfUseCheckbox = document.getElementById("checkbox1");
const newsletterCheckbox = document.getElementById("checkbox2");

const submitBtn = document.querySelector('.btn-submit');

// validation au moment du clique sur "SUBMIT"
form.addEventListener('submit', validate);

// form validation function
function validate(e) {
  e.preventDefault();
}