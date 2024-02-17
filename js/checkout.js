document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("checkout-form");
  const inputs = form.querySelectorAll("input[required]");
  const submitButton = document.getElementById("submit-button");

  function checkInputs() {
    let allInputsFilled = true;
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        allInputsFilled = false;
      }
    });
    submitButton.disabled = !allInputsFilled;
  }

  inputs.forEach((input) => {
    input.addEventListener("input", checkInputs);
  });

  form.addEventListener("submit", function (event) {
    if (!submitButton.disabled) {
      console.log("Formularul este completat și pregătit pentru trimitere.");
    } else {
      event.preventDefault();
      console.log(
        "Vă rugăm să completați toate câmpurile înainte de a trimite formularul."
      );
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("checkout-form");
  const submitButton = document.getElementById("submit-button");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    window.location.href = "index.html?order=success";
  });
});
