document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");
  const registerForm = document.querySelector(".register-form");
  const usernameInput = loginForm.querySelector('input[type="text"]');
  const passwordInput = loginForm.querySelector('input[type="password"]');
  const loginButton = loginForm.querySelector("button");
  const registerUsernameInput = registerForm.querySelector(
    'input[type="text"][placeholder="username"]'
  );
  const registerPasswordInput = registerForm.querySelector(
    'input[type="password"][placeholder="password"]'
  );
  const retypePasswordInput = registerForm.querySelector(
    'input[type="password"][placeholder="Re-type password"]'
  );
  const emailInput = registerForm.querySelector(
    'input[type="text"][placeholder="email address"]'
  );
  const countryInput = registerForm.querySelector(
    'input[type="text"][placeholder="country"]'
  );
  const registerButton = registerForm.querySelector("button");
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

  function checkLoginInputs() {
    if (
      usernameInput.value.trim() !== "" &&
      passwordInput.value.trim().length >= 8
    ) {
      loginButton.removeAttribute("disabled");
    } else {
      loginButton.setAttribute("disabled", "disabled");
    }
  }

  function checkRegisterInputs() {
    if (
      registerUsernameInput.value.trim() !== "" &&
      registerPasswordInput.value.trim().length >= 8 &&
      retypePasswordInput.value.trim().length >= 8 &&
      registerPasswordInput.value === retypePasswordInput.value &&
      emailInput.value.trim() !== "" &&
      countryInput.value.trim() !== ""
    ) {
      registerButton.removeAttribute("disabled");
    } else {
      registerButton.setAttribute("disabled", "disabled");
    }
  }

  usernameInput.addEventListener("input", checkLoginInputs);
  passwordInput.addEventListener("input", checkLoginInputs);

  registerUsernameInput.addEventListener("input", checkRegisterInputs);
  registerPasswordInput.addEventListener("input", checkRegisterInputs);
  retypePasswordInput.addEventListener("input", checkRegisterInputs);
  emailInput.addEventListener("input", checkRegisterInputs);
  countryInput.addEventListener("input", checkRegisterInputs);

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      if (
        enteredUsername === userData.username &&
        enteredPassword === userData.password
      ) {
        window.location.href = "./index.html";
      } else {
        alert("Incorrect username or password!");
      }
    } else {
      alert("The user does not exist!");
    }
  });
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (
      registerUsernameInput.value.trim() !== "" &&
      registerPasswordInput.value.trim().length >= 8 &&
      retypePasswordInput.value.trim().length >= 8 &&
      registerPasswordInput.value === retypePasswordInput.value &&
      emailInput.value.trim() !== "" &&
      countryInput.value.trim() !== ""
    ) {
      const userData = {
        username: registerUsernameInput.value.trim(),
        password: registerPasswordInput.value.trim(),
        email: emailInput.value.trim(),
        country: countryInput.value.trim(),
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      window.location.href = "./signin.html";
    }
  });

  const urlParams = new URLSearchParams(window.location.search);
  const action = urlParams.get("action");

  if (action === "register") {
    registerForm.style.display = "block";
    loginForm.style.display = "none";
  }
});
