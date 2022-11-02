const lugares = [
  {
    nombre: "New York",
    tags: "Ciudad",
    raiting: "4.8",
    img: "/assets/imagenesEEUU/estados-unidos-general.jpg",
  },

  {
    nombre: "California",
    tags: "",
    raiting: "4.3",
    img: "../assets/imagenesEEUU/California.jpeg",
  },
  {
    nombre: "Florida-Miami",
    tags: "",
    raiting: "4.8",
    img: "../assets/imagenesEEUU/Miami-florida.jpg",
  },
];

const actividades = [
  {
    titulo: "Time Square",
    ubicacion: "New york",
    tags: "Actividad",
    horario: "Todo el día",
    web: "",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.286627560008!2d-73.99284097510974!3d40.75887254403169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1ses-419!2sar!4v1666669203110!5m2!1ses-419!2sar",
    img: "../assets/imagenesEEUU/times-square.jpg",
  },
  {
    titulo: "Puente de brooklin ",
    ubicacion: "Brooklyn, New York",
    tags: "",
    horario: "12:00 AM - 11:59 PM",
    web: "",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6049.108903959409!2d-74.00035092326813!3d40.7058093173301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2343ce7b2b%3A0x2526ddba7abd465c!2sPuente%20de%20Brooklyn!5e0!3m2!1ses-419!2sar!4v1666669392481!5m2!1ses-419!2sar",
    img: "../assets/imagenesEEUU/Puente-de-Brooklyn.jpg",
  },
  {
    titulo: "La quinta Avenida",
    ubicacion: "New York",
    tags: "Mercados-Tiendas",
    horario: "9:00 AM - 8:00 PM",
    web: " ",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.783873100539!2d-73.95466307412276!3d40.678730781506545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b9afd7f0a87%3A0x9a8f345acea61147!2sLa%20Quinta%20Inn%20%26%20Suites%20by%20Wyndham%20Brooklyn%20Central!5e0!3m2!1ses-419!2sar!4v1666669611480!5m2!1ses-419!2sar",
    img: "../assets/imagenesEEUU/quinta-avenida-de-nueva-york.jpg",
  },
  {
    titulo: "Museo de Historia Natural",
    ubicacion: "New york",
    tags: "Históricos - Cultural",
    descripcion:
      "situado entre los mejores museos de ciencias del mundo, destaca por la excelente colección de reproducciones de dinosaurios y la de la ballena azul. Abre todos los días 10h a 5:45h. Aunque antes era gratis, ahora tienes que comprar",
    horario: "10:00 AM - 5:00 PM",
    web: "https://www.amnh.org/",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.122358691297!2d-73.97617688459295!3d40.78132407932437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4b00f7a09%3A0xa27d8172624c5db1!2sMuseo%20Americano%20de%20Historia%20Natural!5e0!3m2!1ses-419!2sar!4v1666670552763!5m2!1ses-419!2sar",
    img: "../assets/imagenesEEUU/Museo de historia.jpg",
  },
  {
    titulo: "Miami Crandon Park Beach.",
    ubicacion: "Florida",
    tags: "Playa",
    horario: "",
    web: "",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.9039883107735!2d-80.15882398498019!3d25.7076027336613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b58c7ad31201%3A0x752d0a1cf45fb85a!2sCrandon%20Park!5e0!3m2!1ses-419!2sar!4v1666670875459!5m2!1ses-419!2sar",
    img: "../assets/imagenesEEUU/cranton beach.jpg",
  },
  {
    titulo: "Disneyland",
    ubicacion: "Los Angeles",
    tags: "Parque de diveriones",
    horario: "8:00 AM to 12:00 AM",
    web: "https://disneyland.disney.go.com/destinations/disneyland/?CMP=OKC-330339_GM_DLR_destination_disneylandpark_NA",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13260.362643779028!2d-117.9255366159892!3d33.80997339075885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d12b3b5e6b%3A0x2ef62f8418225cfa!2sDisneyland!5e0!3m2!1ses-419!2sar!4v1666838484266!5m2!1ses-419!2sar",
    img: "../assets/imagenesEEUU/disneyland.jpg",
  },
];
const alojamiento = [
  {
    hotel: "Paramount Hotel Times Square",
    lugarubicacion: "New York",
    tg: "Hotelería",
    horarios: "Check-in 8:00 - Check-out 10:00",
    sitioweb:
      "https://www.nycparamount.com/?utm_source=google-my-business&utm_medium=organic&utm_campaign=hotel-paramount",
    mapas:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.113197018349!2d-73.98919748459356!3d40.759534979326794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258543f40379b%3A0xae966f416e2d9099!2sHotel%20Paramount!5e0!3m2!1ses-419!2sar!4v1666820777589!5m2!1ses-419!2sar",
    img: "../assets/imagenesEEUU/Hotel-Paramount.jpg",
  },
  {
    hotel: "Oceanside ",
    lugarubicacion: "Miami Beach",
    tg: "Hotelería",
    horarios: "Check-in 8:00 - Check-out 10:00",
    sitioweb: "https://oceansidehotelmiamibeach.com/",
    mapas:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.7704512871137!2d-80.12339398497733!3d25.844108283599507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b31f8cc813db%3A0xc19fb9dede63ad0b!2sOceanside%20Hotel%20%2B%20Suites!5e0!3m2!1ses-419!2sar!4v1666838175237!5m2!1ses-419!2sar",
    img: "../assets/imagenesEEUU/oceanside.jpg",
  },
  {
    hotel: "La Adventure ",
    lugarubicacion: "California",
    tg: "Hotelería",
    horarios: "Check-in 8:00 - Check-out 10:00",
    sitioweb: "https://www.laadventureinglewood.com/",
    mapas:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.8418121346313!2d-118.35104878478784!3d33.945196480635246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b6f662124b5b%3A0xf603e4404cad7931!2sLA%20Adventure%20Hotel!5e0!3m2!1ses-419!2sar!4v1666838758014!5m2!1ses-419!2sar",
    img: "../assets/imagenesEEUU/budget-hotel-in-inglewood.jpg",
  },
];

const paisLugares = document.querySelector(".pais-lugares");
const paisActividades = document.querySelector(".pais-actividades");
const paisAlojamiento = document.querySelector(".pais-alojamiento");

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

alojamiento.forEach(function (alojamiento) {
  let content = `
    <article class="card-lm">
    <div class="bg-img">
      <img src="${alojamiento.img}" alt="${alojamiento.hotel}" />
    </div>
    <div class="card-info">
        <p class="card-lm-tg">${alojamiento.tg}</p>
        <p class="horarios">${alojamiento.horarios}</p>
      <header class="card-lm-header">
          <h6 class="card-lm-title">${alojamiento.hotel}</h6>
      </header>
      <div class="card-contact">
        <p class="card-lm-lugarubicacion">${alojamiento.lugarubicacion}</p>
        <a href="${alojamiento.sitioweb}" target="_blank"><i class="fa-solid fa-globe"></i></a>
      </div>
      <iframe src="${alojamiento.mapas}"  width="100%" height="138" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </article>
    `;
  paisAlojamiento.insertAdjacentHTML("beforeend", content);
});
