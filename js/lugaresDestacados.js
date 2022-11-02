const lugares = [
  {
    lugar: "Nueva York",
    pais: "Estados Unidos",
    puntaje: "4.8",
    imgUrl: "../assets/imagenesEEUU/central-park-alturas.jpg",
  },
  {
    lugar: "El Cairo",
    pais: "Egipto",
    puntaje: "4.8",
    imgUrl: " ../assets/egipto-lugares-cairo-2.jpg",
  },

  {
    lugar: "Isla de Jeju",
    pais: "Corea del Sur",
    puntaje: "4.9",
    imgUrl: "../assets/lugares-jeju.jpg",
  },
];

const destinos = [
  {
    nombre: "Colombia",
    url: "../assets/destinos-pop-colombia.jpg",
  },
  {
    nombre: "Corea del Sur",
    url: "../assets/destino-pop-corea.jpg",
  },
  {
    nombre: "Estados Unidos",
    url: "../assets/destino-pop-NY.jpg",
  },
  {
    nombre: "Egipto",
    url: "../assets/egipto-lugares-siwa.jpg",
  },
  {
    nombre: "Tailandia",
    url: "../assets/destino-pop-tailandia.jpg",
  },
  {
    nombre: "Alemania",
    url: "../assets/destino-pop-alemania.jpg",
  },
];

const destinosPopulares = document.querySelector(".destinos-populares");
const cardsContainer = document.querySelector(".cards-lg-container");

lugares.forEach(function (lugar) {
  let content = `
    <article class="card-lg">
      <div class="bg-img">
        <img src="${lugar.imgUrl}" alt="${lugar.lugar}" />
      </div>
      <div class="card-info">
        <div class="card-lg-s1">
          <p class="card-lg-pais">${lugar.pais}</p>
          <section class="puntaje">
              <p class="card-puntaje">${lugar.puntaje}</p>
              <i class="fa-solid fa-star card-puntaje-icon"></i>
          </section>
        </div>
        <header class="card-lg-header">
            <i class="fa-solid fa-location-dot card-lg-location-icon"></i>
            <h6 class="card-lg-title">${lugar.lugar}</h6>
        </header>
      </div>
    </article>
`;
  cardsContainer.insertAdjacentHTML("beforeend", content);
});

destinos.forEach(function (destino) {
  let content = `
    <article class='img-card'>
      <div class="img-container">
        <img src="${destino.url}" alt="" class="destino-img" />
      </div>
      <a href="/views/${destino.nombre.replaceAll(" ", "")}.html">
        <div class="title-container"><h5 class="destino-title">${
          destino.nombre
        }</h5></div>
      </a>
      
    </article>
  `;
  destinosPopulares.insertAdjacentHTML("beforeend", content);
});
