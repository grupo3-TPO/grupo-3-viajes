const lugares = [
  {
    lugar: "Luxor",
    pais: "África",
    puntaje: "4.8",
    imgUrl: " ../assets/egipto-lugares-luxor.jpg",
  },
  {
    lugar: "Nueva York",
    pais: "Estados Unidos",
    puntaje: "4.5",
    imgUrl: "../assets/imagenesEEUU/central-park-alturas.jpg",
  },
  {
    lugar: "Isla de Jeju",
    pais: "Corea del Sur",
    puntaje: "4.9",
    imgUrl: "../assets/destino-pop-corea.jpg",
  },
];

let cardsContainer = document.querySelector(".cards-lg-container");

lugares.forEach(function (lugar) {
  let content = `
<article class="card-lg">
<div class="bg-img"></div>
<p class="card-lg-pais">${lugar.pais}</p>
<div class="puntaje">
    <p class="card-puntaje">${lugar.puntaje}</p>
    <i class="fa-solid fa-star card-puntaje-icon"></i>
</div>

<header>
    <i class="fa-solid fa-location-dot card-lg-location-icon"></i>
    <h6 class="card-lg-title">${lugar.lugar}</h6>
    
</header>
</article>

`;
  cardsContainer.insertAdjacentHTML("beforeend", content);
});
