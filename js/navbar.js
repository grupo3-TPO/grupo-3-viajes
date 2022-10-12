let dropdownIcon = document.querySelector(".dropdown-icon");
let dropdownLabel = document.querySelector(".dropdown-label");
let dropdown = document.querySelector(".dropdown");

dropdownLabel.addEventListener("click", function () {
  dropdown.classList.toggle("hidden");
  dropdownIcon.classList.toggle("up");
});
