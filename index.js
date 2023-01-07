import timer from "./timer.js";
import createCustomSelect from "./custom-select.js";

timer();
createCustomSelect();

const SignUpPage = document.getElementById("signUp");
const emailContainer = document.getElementById("emailContainer");
const emailInput = document.getElementById("emailInput");
const email = document.querySelector(".email");
const form = document.querySelector("form");
const name = document.getElementById("name");
// const form = document.getElementById('send-data')

emailInput.addEventListener("invalid", (event) => {
  event.preventDefault();
  emailInput.classList.add("error");
  emailContainer.classList.add("error-container");
});

emailInput.addEventListener("focus", () => {
  emailContainer.classList.remove("error");
  emailContainer.classList.remove("error-container");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  SignUpPage.style.background = "#fff";
  SignUpPage.innerHTML = `
    <header class="header--signup">
      <img src="./assets/shared/logo.svg" alt="logo" />
    </header>
    <div  style="text-align: center; font-size: 1.5rem">
      <h1 style="font-size:2.5rem;margin-bottom:1rem">Thank's for join to our community!</h1>
      <p class="aricle__paragraph--aftersignup">
        We are contact with You as soon as it is possible
        your sign up data is:
      </p>
      <p class="aricle__paragraph--aftersignup "><b>Name:</b> ${name.value} </p>
      <p class="aricle__paragraph--aftersignup "><b>Email:</b> ${emailInput.value} </p>
      <p class="aricle__paragraph--aftersignup "><b>Your program:</b> ${document.forms["send-data"].elements[2].value} </p>
      <p class="aricle__paragraph--aftersignup "><b>Your program:</b> ${document.forms["send-data"].elements[3].value} </p>
      <p class="aricle__paragraph--aftersignup "><b>Your program:</b> ${document.forms["send-data"].elements[4].value} </p>
    </div>
  `;
});
