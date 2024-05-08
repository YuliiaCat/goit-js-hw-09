'use strict';

const form = document.querySelector(".feedback-form");
const errorMessage = document.createElement("p");
errorMessage.classList.add("error-message");
errorMessage.textContent = "Fill please all fields";
errorMessage.style.display = "none";

form.appendChild(errorMessage);

const formData = {
  email: "",
  message: ""
};

function updateFormFields() {
  document.querySelector('input[name="email"]').value = formData.email;
  document.querySelector('textarea[name="message"]').value = formData.message;
}

form.addEventListener("input", function (event) {
  if (event.target.name === "email") {
    formData.email = event.target.value.trim();
  } else if (event.target.name === "message") {
    formData.message = event.target.value.trim();
  }

  localStorage.setItem("feedback-form-state", JSON.stringify(formData));

});

const savedData = localStorage.getItem("feedback-form-state");
if (savedData !== null) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email;
  formData.message = parsedData.message;
  updateFormFields();
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formFields = event.target;

  if (!formData.email || !formData.message) {
    errorMessage.style.display = "block";
    return;
  }

  console.log(formData);
  formFields.reset();
  localStorage.clear();

  formData.email = "";
  formData.message = "";

  errorMessage.style.display = "none";
}

updateFormFields();
