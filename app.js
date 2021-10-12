

const errors = document.querySelectorAll("#errors")
const nameInput = document.querySelector("#name")
const firstName = document.querySelector("#first-name")
const email = document.querySelector("#email")
const email2 = document.querySelector("#email-confirm")
const age = document.querySelector("#age")
const password = document.querySelector("#password")
const password2 = document.querySelector("#password2")
const cgu = document.querySelector("#cgu")
const inputs = document.querySelectorAll("input")
const form = document.querySelector('form')
const errorName = document.querySelector('#error-name')
const errorFirstName = document.querySelector('#error-first-name')
const errorEmail = document.querySelector('#error-email')
const errorEmail2 = document.querySelector('#error-email-confirm')
const errorAge = document.querySelector('#error-age')
const passwordError = document.querySelector("#error-password")
const password2Error = document.querySelector("#error-password-confirm")
const errorCGU = document.querySelector("#error-cgu")

const patternEmpty = /[a-zA-Z]{1,}/

nameInput.addEventListener("input", e => {
  let pattern = /[a-zA-Z]{3,}/
  let currentValue = e.target.value

  if (!patternEmpty.test(currentValue)) {
    reset(nameInput, errorName)
  } else if (!pattern.test(currentValue)) {
    fail(nameInput, errorName)
    errorName.innerText = "Le nom est trop court"
  } else {
    success(nameInput, errorName)
  }
})

firstName.addEventListener("input", e => {
  let pattern = /[a-zA-Z]{3,}/
  let currentValue = e.target.value

  if (!patternEmpty.test(currentValue)) {
    reset(firstName, errorFirstName)
  } else if (!pattern.test(currentValue)) {
    fail(firstName, errorFirstName)
    errorFirstName.innerText = "Le prénom est trop court"
  } else {
    success(firstName, errorFirstName)
  }
})

email.addEventListener("input", e => {
  let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let currentValue = e.target.value

  if (!patternEmpty.test(currentValue)) {
    reset(email, errorEmail)
  } else if (!pattern.test(currentValue)) {
    fail(email, errorEmail)
    errorEmail.innerText = "L'email entré ne passe pas nos tests techniques ultra poussés..."
  } else {
    success(email, errorEmail)
  }
})

email2.addEventListener("input", e => {
  let currentValue = e.target.value

  if (!patternEmpty.test(currentValue)) {
    reset(email2, errorEmail2)
  } else if (currentValue !== email.value) {
    fail(email2, errorEmail2)
    errorEmail2.innerText = "Les emails entrés ne matchent pas"
  } else {
    success(email2, errorEmail2)
  }
})

age.addEventListener("change", e => {
  let pattern = /^([1-9]?\d|100)$/
  let currentValue = e.target.value

  if (!patternEmpty.test(currentValue)) {
    reset(age, errorAge)
  } else if (!pattern.test(currentValue)) {
    fail(age, errorAge)
    errorAge.innerText = "C'est vraiment ton âge ???"
  } else {
    success(age, errorAge)
  }
})

password.addEventListener("input", e => {
  let pattern = /^.{6,}$/
  let currentValue = e.target.value

  if (!patternEmpty.test(currentValue)) {
    reset(password, passwordError)
  } else if (!pattern.test(currentValue)) {
    fail(password, passwordError)
    passwordError.innerText = "Le mot de passe saisi est trop court"
  } else {
    success(password, passwordError)
  }
})

password2.addEventListener("input", e => {
  let currentValue = e.target.value

  if (!patternEmpty.test(currentValue)) {
    reset(password2, password2Error)
  } else if (currentValue !== password.value) {
    fail(password2, password2Error)
    password2Error.innerText = "Les mots de passe ne correspondent pas"
  } else {
    success(password2, password2Error)
  }
})

form.addEventListener("submit", e => {
  e.preventDefault()
  if (!cgu.checked)
    errorCGU.innerText = "Veuillez accepter les CGVs !"
  else
    errorCGU.innerText = ""
})

function success(input, error) {
  input.classList.add('success')
  input.classList.remove('fail')
  error.classList.add("success")
  error.innerText = "All good"
}

function fail(input, error) {
  input.classList.remove('success')
  input.classList.add('fail')
  error.classList.remove("success")
}

function reset(input, error) {
  input.classList.remove('fail', 'success')
  error.classList.remove("success")
  error.innerText = ""
}