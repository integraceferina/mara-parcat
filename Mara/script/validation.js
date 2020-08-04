const form = document.querySelector("#info")
const nombreyapellido = document.querySelector("#nombreyapellido")
const nombreyapellidoHelp = document.querySelector("#nombreyapellidoHelp")
const telefono = document.querySelector("#telefono")
const telefonoHelp = document.querySelector("#telefonoHelp")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")

form.addEventListener("submit", (event) => {
event.preventDefault()
    if (nombreyapellido.value === "" || telefono.value === "" || email.value === "") {
if (nombreyapellido.value === "") {
      nombreyapellidoHelp.innerText = "¡Porfavor , completar esta informacio!"
    }
    if (telefono.value === "") {
      telefonoHelp.innerText = "¡Porfavor , completar esta infformacio!"
    }
    if (email.value === "") {
      emailHelp.innerText = "¡Porfavor , completar esta informacio!"
    }
  } else {
    form.submit();
  }
})

