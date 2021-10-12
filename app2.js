const nameInput = document.querySelector("#name")
const firstName = document.querySelector("#first-name")
const email = document.querySelector("#email")
const email2 = document.querySelector("#email-confirm")
const age = document.querySelector("#age")
const password = document.querySelector("#password")
const password2 = document.querySelector("#password2")
const cgu = document.querySelector("#cgu")
const form = document.querySelector('form')

const inputsList = [nameInput, firstName, email, email2, age, password, password2]

const errorMsg = document.createElement("p")
errorMsg.append("Veuillez remplir tous les champs")

function validateInput(input) {
  const regex = new RegExp(input.dataset.regexPattern)
  if (regex.test(input.value)) {
    input.classList.add("input-ok")
    input.closest(".form-group").querySelector("span").classList.add("hidden")
    success(input)

  } else {
    input.closest(".form-group").querySelector("span").classList.remove("hidden")
    input.classList.remove("input-ok")
    fail(input)
  }
}

form.addEventListener("keyup", () => {
  inputsList.forEach(input => {
    if (input.value !== "") {
      if (input === email2)
        validateSame(email, email2)
      else if (input === password2)
        validateSame(password, password2)
      else validateInput(input)
    }
  })
})


form.addEventListener("submit", (e) => {
  const inputOks = document.querySelectorAll(".input-ok")

  if (inputsList.some(input => input.value === "")) {
    form.append(errorMsg)
  }

  if (inputOks.length !== inputsList.length || cgu.checked === false) {
    e.preventDefault()
    console.log("STOP")
  }
})



function validateSame(input1, input2) {
  if (input1.value === input2.value) {
    input2.classList.add("input-ok")
    input2.closest(".form-group").querySelector("span").classList.add("hidden")
  }
  else {
    input2.classList.remove("input-ok")
    input2.closest(".form-group").querySelector("span").classList.remove("hidden")
  }
}




function success(input) {
  input.classList.add('success')
  input.classList.remove('fail')
}

function fail(input) {
  input.classList.remove('success')
  input.classList.add('fail')
}

// function success(input, error) {
//   input.classList.add('success')
//   input.classList.remove('fail')
//   error.classList.add("success")
//   error.innerText = "All good"
// }

// function fail(input, error) {
//   input.classList.remove('success')
//   input.classList.add('fail')
//   error.classList.remove("success")
// }

function reset(input, error) {
  input.classList.remove('fail', 'success')
  error.classList.remove("success")
  error.innerText = ""
}