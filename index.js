import timer from "./timer.js";
import createCustomSelect from "./custom-select.js";

const SignUpPage = document.getElementById("signUp");
const DataType = document.querySelectorAll("[data-type]");
const emailContainer = document.getElementById("emailContainer");
const emailInput = document.getElementById("emailInput");
const email = document.querySelector(".email");
const form = document.querySelector("form");

timer();
createCustomSelect();

emailInput.addEventListener("invalid", (event) => {
  event.preventDefault();
  emailInput.classList.add("error");
  emailContainer.classList.add("error-container");
});

emailInput.addEventListener("focus", () => {
  emailContainer.classList.remove("error");
  emailContainer.classList.remove("error-container");
});

function renderText() {
  let inpuTextHtml = "";
  DataType.forEach((data, index) => {
    inpuTextHtml += `
      <p style="text-align: left"class="article__paragraph--aftersignup"><b>${data.dataset.type}:</b> 
      ${document.forms["send-data"].elements[index].value} </p>
    `;
  });

  SignUpPage.innerHTML = `
    <header class="header--signup" style="text-align: center"  >
      <img src="./assets/shared/logo.svg" alt="logo" />
    </header>
    <div  style="text-align: center; font-size: 1.5rem; padding: 0 2rem">
      <h1 style="font-size:2.5rem;margin-bottom:1rem">Thank's for join to our community!</h1>
      <p style="margin-bottom:1.5rem"class="article__paragraph--aftersignup">
        We are contact with You as soon as it is possible
        your sign up data is:
      </p>
      <div class="paragraph-container" id="paragraph-container">
      ${inpuTextHtml}
      </div>
    </div>
  `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  SignUpPage.style.background = "#fff";
  renderText();
});
