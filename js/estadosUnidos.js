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
      tags: "actividad",
      horario: "Todo el día",
      web: "",
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.286627560008!2d-73.99284097510974!3d40.75887254403169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1ses-419!2sar!4v1666669203110!5m2!1ses-419!2sar",
      img:"../assets/imagenesEEUU/times-square.jpg"
    },
    {
      titulo: "Puente de brooklin ",
      ubicacion: "Brooklin Nueva York",
      tags: "",
      horario: "12:00 AM - 11:59 PM",
      web: "",
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6049.108903959409!2d-74.00035092326813!3d40.7058093173301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2343ce7b2b%3A0x2526ddba7abd465c!2sPuente%20de%20Brooklyn!5e0!3m2!1ses-419!2sar!4v1666669392481!5m2!1ses-419!2sar",
      img: "../assets/imagenesEEUU/Puente-de-Brooklyn.jpg"
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
      descripcion:"situado entre los mejores museos de ciencias del mundo, destaca por la excelente colección de reproducciones de dinosaurios y la de la ballena azul. Abre todos los días 10h a 5:45h. Aunque antes era gratis, ahora tienes que comprar",
      horario: "10:00 AM - 5:00 PM",
      web: "https://www.amnh.org/",
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.122358691297!2d-73.97617688459295!3d40.78132407932437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4b00f7a09%3A0xa27d8172624c5db1!2sMuseo%20Americano%20de%20Historia%20Natural!5e0!3m2!1ses-419!2sar!4v1666670552763!5m2!1ses-419!2sar",
      img: "../assets/imagenesEEUU/Museo de Historia Natural.jpg>",
    },
    {
      titulo: "Miami Crandon Park Beach.",
      ubicacion: "Florida",
      tags: "Playa",
      horario: "",
      web: "",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.9039883107735!2d-80.15882398498019!3d25.7076027336613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b58c7ad31201%3A0x752d0a1cf45fb85a!2sCrandon%20Park!5e0!3m2!1ses-419!2sar!4v1666670875459!5m2!1ses-419!2sar",
      img: "../assets/imagenesEEUU/cranton beach.jpg",
    },
  ];
  
  const paisLugares = document.querySelector(".pais-lugares");
  const paisActividades = document.querySelector(".pais-actividades");
  
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
        <a href="${actividad.web}"><i class="fa-solid fa-globe"></i></a>
      </div>
      <iframe src="${actividad.mapa}"  width="100%" height="138" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </article>
    `;
    paisActividades.insertAdjacentHTML("beforeend", content);
  });