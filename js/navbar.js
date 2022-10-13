let dropdownIcon = document.querySelector(".dropdown-icon");
let dropdownLabel = document.querySelector(".dropdown-label");
let dropdown = document.querySelector(".dropdown");

let hamburguerIcon = document.querySelector(".hamburguer-menu");
let mainNav = document.querySelector(".main-navigation");

dropdownLabel.addEventListener("click", function () {
  dropdown.classList.toggle("hidden");
  dropdownIcon.classList.toggle("up");
});

// Cambiar icono de hamburguesa por x
hamburguerIcon.addEventListener("click", function () {
  mainNav.classList.toggle("hidden");
  if (hamburguerIcon.classList.contains("fa-bars")) {
    hamburguerIcon.classList.remove("fa-bars");
    hamburguerIcon.classList.add("fa-x");
  } else {
    hamburguerIcon.classList.remove("fa-x");
    hamburguerIcon.classList.add("fa-bars");
  }
});
