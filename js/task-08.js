const form = document.querySelector(".js-register-form");

let hasEmptyFields = false;

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formInputs = event.currentTarget.querySelectorAll("input");

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
  const formValues = Object.fromEntries(formData.entries());
  console.log(formValues);

  event.currentTarget.reset();
}
