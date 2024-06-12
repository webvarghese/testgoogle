const customerForm = document.getElementById("customerForm")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const phoneNumber = document.getElementById("phoneNumber")
const city = document.getElementById("city")
const submitButton = document.getElementById("submitButton")
const buttonSpinner = document.getElementById("buttonSpinner")
const buttonText = document.getElementById("buttonText")
const unknownError = document.getElementById("unknownError")

function afterSubmit(e) {
  e.preventDefault()
  if (customerForm.checkValidity() === false) {
    e.stopPropagation()
    for (let field of customerForm.elements) {
      if (!field.checkValidity()) {
        field.classList.add("is-invalid")
      }
    }
    return
  }

  for (let field of customerForm.elements) {
    field.classList.remove("is-invalid")
  }
  const info = {
    first: firstName.value,
    last: lastName.value,
    phone: phoneNumber.value,
    city: city.value,
  }
  const url =
    "https://script.google.com/macros/s/AKfycbyl5Ga59rVW7tLzFSHRnqeMwzXRh01JRd3qlUSqS6-atcXz_hBFc7xIPMNWXMWfxVQU/exec"

  buttonText.textContent = "Saving..."
  buttonSpinner.classList.remove("d-none")
  submitButton.disabled = true
  fetch(url, {
    method: "POST",
    cache: "no-cache",
    redirect: "follow",
    body: JSON.stringify(info),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      customerForm.reset()
      buttonText.textContent = "Send"
      buttonSpinner.classList.add("d-none")
      submitButton.disabled = false
    })
    .catch((err) => {
      console.log("Someting went wrong")
      unknownError.classList.remove("d-none")
      setTimeout(() => {
        unknownError.classList.add("d-none")
        buttonText.textContent = "Send"
        buttonSpinner.classList.add("d-none")
        submitButton.disabled = false
      }, 3000)
    })
}

customerForm.addEventListener("submit", afterSubmit)
