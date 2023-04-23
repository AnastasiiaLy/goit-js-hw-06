const form = document.querySelector(".js-register-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formInputs = event.currentTarget.querySelectorAll("input");
  let hasEmptyFields = false;

  formInputs.forEach((input) => {
    if (!input.value) {
      hasEmptyFields = true;
    }
  });

  if (hasEmptyFields) {
    alert("Please fill in all fields.");
    return;
  }

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, type) => {
    console.log(`${type}: ${value}`);
  });

  event.currentTarget.reset();
}
