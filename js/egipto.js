const lugares = [
  {
    nombre: "Dahab",
    tags: "Playas",
    raiting: "4.8",
    img: "../assets/egipto-lugares-dahab.jpg",
  },
  // {
  //   nombre: "El Cairo",
  //   tags: "Ciudades - Históricos",
  //   raiting: "4.7",
  //   img: "../assets/egipto-lugares-cairo-1.jpg",
  // },
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
    tags: "Museos - Cultura",
    horario: "9:00 AM - 5:00 PM",
    web: "http://www.facebook.com/pg/EgyptianMuseum09/about/?ref=page_internal",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.60148902413!2d31.231451850579234!3d30.04828878179198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458b14d72adf029%3A0x9a38f9bbb6edbfe4!2sThe%20Egyptian%20Museum!5e0!3m2!1ses!2sar!4v1666606229346!5m2!1ses!2sar",
    img: "../assets/egipto-actividades-museo.jpg",
  },
  {
    titulo: "Río Nilo ",
    ubicacion: "El Cairo",
    tags: "Naturaleza - Ríos",
    horario: "12:00 AM - 11:59 PM",
    web: "",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661708.9389945925!2d29.839842510552835!3d27.275283217972095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145ab3a846ac45ad%3A0x623b3324fc34ab22!2sNilo!5e0!3m2!1ses!2sar!4v1666606125354!5m2!1ses!2sar",
    img: "../assets/egipto-actividades-rio-nilo-1.jpg",
  },
  {
    titulo: "Khan Al-Khalili ",
    ubicacion: "El Cairo",
    tags: "Mercados",
    horario: "9:00 AM - 5:00 PM",
    web: " http://www.egypt.travel/en/attractions/khan-el-khalili",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.131539669144!2d31.13914945057737!3d29.975649481818568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584589eed5ea55%3A0xaf35b523b7f001f0!2sKhan%20El%20Khalili%20Market!5e0!3m2!1ses!2sar!4v1666605911013!5m2!1ses!2sar",
    img: "../assets/egipto-actividades-khan.jpg",
  },
  {
    titulo: "Pirámides de Guiza",
    ubicacion: "Guiza",
    tags: "Históricos - Ruinas",
    horario: "8:30 AM - 4:00 PM",
    web: "",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.064004479997!2d31.130332250577418!3d29.977590531817857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584587ac8f291b%3A0x810c2f3fa2a52424!2sGran%20Pir%C3%A1mide%20de%20Guiza!5e0!3m2!1ses!2sar!4v1666606004394!5m2!1ses!2sar",
    img: "../assets/egipto-actividades-guiza.jpg",
  },
  {
    titulo: "Fortaleza de Shali",
    ubicacion: "Siwa",
    tags: "Históricos",
    horario: "",
    web: "",
    mapa: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13930.853781307636!2d25.5164925!3d29.2025623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2bedc127a0c9fcb!2sFortaleza%20de%20Shali!5e0!3m2!1ses!2sar!4v1666605670832!5m2!1ses!2sar",
    img: "../assets/egipto-lugares-siwa.jpg",
  },
];

const paisLugares = document.querySelector(".pais-lugares");
const paisActividades = document.querySelector(
  ".cards-md-container-pais-actividades"
);

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

actividades.forEach(function (actividad) {
  let content = `
  <article class="card-md">
  <div class="bg-img">
    <img src="${actividad.img}" alt="${actividad.titulo}" />
  </div>
  <div class="card-info">
      <p class="card-md-tag">${actividad.tags}</p>
      <p class="horarios">${actividad.horario}</p>
    <header class="card-md-header">
        <h6 class="card-md-title">${actividad.titulo}</h6>
    </header>
    <div class="card-contact">
      <p class="card-md-ubicacion">${actividad.ubicacion}</p>
      <a href="${actividad.web}" target="_blank"><i class="fa-solid fa-globe"></i></a>
    </div>
    <iframe src="${actividad.mapa}"  width="100%" height="138" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</article>
  `;
  paisActividades.insertAdjacentHTML("beforeend", content);
});
