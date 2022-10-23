const lugares = [
  {
    nombre: "Dahab",
    tags: "Playas",
    raiting: "4.8",
    img: "../assets/egipto-lugares-dahab.jpg",
  },
  {
    nombre: "El Cairo",
    tags: "Ciudades - Históricos",
    raiting: "4.7",
    img: "../assets/egipto-lugares-cairo-1.jpg",
  },
  {
    nombre: "Siwa",
    tags: "Oasis - Ruinas",
    raiting: "4.3",
    img: "../assets/egipto-lugares-siwa.jpg",
  },
  {
    nombre: "Luxor",
    tags: "Históricos - Ruinas",
    raiting: "4.8",
    img: "../assets/egipto-lugares-luxor-2.jpg",
  },
];

const actividades = [
  {
    titulo: "Museo de Antigüedades Egipcias",
    ubicacion: "El Cairo",
    tags: ["Museos", "Cultura"],
    horario: "9:00 AM - 5:00 PM",
    web: "http://www.facebook.com/pg/EgyptianMuseum09/about/?ref=page_internal",
    descripcion:
      "Este famoso museo alberga la colección más grande del mundo de artefactos del antiguo Egipto (más de 120,000 artículos en exhibición) con la famosa colección de Tutankamón con su hermosa máscara mortuoria y sarcófago de oro y la sala de la momia real, que alberga once dignatarios faraónicos adicionales.",
    img: "../assets/egipto-actividades-museo",
  },
  {
    titulo: "Río Nilo ",
    ubicacion: "El Cairo",
    tags: ["Naturaleza", "Ríos"],
    horario: "12:00 AM - 11:59 PM",
    web: "",
    descripcion:
      "Con una extensión de 4,187 millas, el río más largo del mundo fluye desde su fuente principal, el lago Victoria en el este de África central, a través de Uganda, Sudán, Etiopía y hacia el norte en Egipto hasta el mar Mediterráneo.",
    img: "../assets/egipto-actividades-rio-nilo-1.jpg",
  },
  {
    titulo: "Khan Al-Khalili ",
    ubicacion: "El Cairo",
    tags: ["Mercados"],
    horario: "9:00 AM - 5:00 PM",
    web: " http://www.egypt.travel/en/attractions/khan-el-khalili",
    descripcion:
      "Ubicado en el corazón del Cairo islámico, este concurrido y colorido bazar al aire libre está repleto de artículos únicos y exóticos, desde especias y perfumes hasta joyas y recuerdos.",
    img: "../assets/egipto-actividades-khan.jpg",
  },
  {
    titulo: "Pirámides de Guiza",
    ubicacion: "Guiza",
    tags: ["Históricos", "Ruinas"],
    horario: "8:30 AM - 4:00 PM",
    web: "",
    descripcion:
      "Quizás la más reconocible entre las Siete Maravillas del Mundo, el origen exacto de estas majestuosas pirámides continúa generando debate.",
    img: "../assets/egipto-actividades-guiza.jpg",
  },
  {
    titulo: "Fortaleza de Shali",
    ubicacion: "Siwa",
    tags: ["Históricos"],
    horario: "",
    web: "",
    descripcion:
      "En el corazón del oasis se encuentra la icónica Fortaleza de Shali. Construida entre los siglos XII y XIII, es una estructura hecha de una mezcla llamada Kershef, un material de construcción local original utilizado en la arquitectura de Siwa. Kershef es una mezcla de sal, barro y otros minerales del lago salado de Siwa.",
    img: "../assets/egipto-lugares-siwa.jpg",
  },
];

const paisLugares = document.querySelector(".pais-lugares");

lugares.forEach(function (lugar) {
  let content = `
      <article class="card-lg">
        <div class="bg-img">
          <img src="${lugar.img}" alt="${lugar.nombre}" />
        </div>
        <div class="card-info">
          <div class="card-lg-s1">
            <p class="card-lg-tag">${lugar.tags}</p>
            <section class="puntaje">
                <p class="card-puntaje">${lugar.raiting}</p>
                <i class="fa-solid fa-star card-puntaje-icon"></i>
            </section>
          </div>
          <header class="card-lg-header">
              <i class="fa-solid fa-location-dot card-lg-location-icon"></i>
              <h6 class="card-lg-title">${lugar.nombre}</h6>
          </header>
        </div>
      </article>
  `;
  paisLugares.insertAdjacentHTML("beforeend", content);
});
