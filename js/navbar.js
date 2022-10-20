const navbar = document.querySelector(".navbar");
const content = `
<div class="navbar-content">
<a href="/index.html"><img src="../assets/logo.png" alt="" class="logo"></a>

<ul class="main-navigation hidden ">
    <li>
        <p class="dropdown-label">Paises<i class="fa-solid fa-chevron-down dropdown-icon"></i></p>
        
        <ul class="dropdown hidden">
            <p class="label-continentes">Ver por continentes</p>
            <menu class="menu-continentes">
                <li>América</li>
                <li>África</li>
                <li>Asia</li>
                <li>Europa</li>
                <li>Oceanía</li>
            </menu>
            <li><a href="/views/paises.html">Ver todos</a></li>
        </ul>
    </li>
    <li><a href="#">Actividades</a></li>
    <li><a href="#">Contacto</a></li>
</ul>
<menu class="account-menu">
    <li><a href="#">Ingresar</a></li>
    <li><a href="/views/registro.html" class="btn-cta-primary">Registro</a></li>
</menu>
<i class="fa-solid fa-bars  hamburguer-menu"></i>
</div>


`;

navbar.insertAdjacentHTML("beforeend", content);

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
