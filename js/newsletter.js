const inputCampo = document.querySelector(".mail-input");
const mensajeError = document.querySelector(".mensaje-error");
const mensajeSuccess = document.querySelector(".mensaje-success");

function suscribirse() {
  let mail = document.querySelector(".mail-input").value;
  if (mail == "" || mail.indexOf("@") < 1 || mail.indexOf(".") < 1) {
    inputCampo.style.border = "1px solid var(--error)";
    mensajeError.style.opacity = 1;
    mensajeSuccess.style.opacity = 0;
  } else {
    inputCampo.style.border = "1px solid var(--success)";
    mensajeError.style.opacity = 0;
    mensajeSuccess.style.opacity = 1;
  }
  console.log(mail);
}
