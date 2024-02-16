document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");
  const registerForm = document.querySelector(".register-form");
  const createAccountLink = document.getElementById("create-account-link");

  createAccountLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  });

  document
    .querySelector(".message a")
    .addEventListener("click", function (event) {
      event.preventDefault();
      loginForm.style.display = "block";
      registerForm.style.display = "none";
    });
});

const urlParams = new URLSearchParams(window.location.search);
const action = urlParams.get("action");

if (action === "register") {
  document.querySelector(".register-form").style.display = "block";
  document.querySelector(".login-form").style.display = "none";
}
