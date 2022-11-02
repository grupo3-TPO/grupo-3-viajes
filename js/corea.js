const lugares = [
  {
    nombre: "Seogwipo",
    tags: "Montañas",
    raiting: "4.9",
    img: "../assets/corea/Seogwipo.jpg",
  },

  {
    nombre: "Gyeongju",
    tags: "",
    raiting: "4.3",
    img: "../assets/corea/wolji-pond-at-dusk.jpg",
  },
  {
    nombre: "Jeju",
    tags: "Islas",
    raiting: "4.9",
    img: "../assets/corea/jeju.jpg",
  },
];

const actividades = [
  {
    titulo: "Sungnyemun",
    ubicacion: "Seúl",
    tags: "Tesoro Nacional",
    horario: "9:00 AM - 6:00 PM",
    web: "http://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1111100010000&pageNo=1_1_1_1",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.792953212694!2d126.97311015078533!3d37.55994157969993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3cf536802a3%3A0xbd94666bbf6162e3!2sSungnyemun!5e0!3m2!1ses!2sar!4v1667424792272!5m2!1ses!2sar",
    img: "../assets/corea/Sungnyemun.jpg",
  },
  {
    titulo: "Namsan Seoul Tower",
    ubicacion: "Seúl",
    tags: "",
    horario: "10:00 AM - 11:00 PM",
    web: "http://www.seoultower.co.kr/",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12651.171871414352!2d126.96651724733483!3d37.55994123479572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca257a88e6aa9%3A0x5cf8577c2e7982a5!2sN%20Seoul%20Tower!5e0!3m2!1ses!2sar!4v1667425081268!5m2!1ses!2sar",
    img: "../assets/corea/namsan.jpg",
  },
  {
    titulo: "Dongmun Market ",
    ubicacion: "Jeju",
    tags: "Mercados",
    horario: "5:00 AM - 20:00 PM",
    web: " http://dm.market.jeju.kr/",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.566168666798!2d126.5217674908926!3d33.51266261939773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350ce353ff30d105%3A0x3c9a585a805f7cf5!2sDongmun%20Traditional%20Market!5e0!3m2!1ses!2sar!4v1667425288457!5m2!1ses!2sar",
    img: "../assets/corea/dongmun.jpg",
  },
];
const alojamiento = [
  {
    hotel: "Crown Parkhotel",
    lugarubicacion: "Seul",
    tg: "Hotelería",
    horarios: "Check-in 14:00 - Check-out 12:00",
    sitioweb: "https://www.crownparkhotel.co.kr/",
    mapas:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5216758509887!2d-74.13809648523767!3d4.678997196601329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c8fdfe3c89f%3A0x4cd044081919640c!2sCrown%20Park%20Hotel!5e0!3m2!1ses-419!2sar!4v1667335873757!5m2!1ses-419!2sar",
    img: "../assets/corea/crown.jpg",
  },
  {
    hotel: "Line Hotel",
    lugarubicacion: "Myeongdong",
    tg: "Hotelería",
    horarios: "Check-in 14:00 - Check-out 12:00",
    sitioweb: "http://www.line-hotel.co.kr/",
    mapas:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.5643335347736!2d126.98148541531155!3d37.56532697979816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3ff912c6661%3A0x4fd98501a3c8630e!2sLINE%20HOTEL%20MYEONGDONG!5e0!3m2!1ses-419!2sar!4v1667336529553!5m2!1ses-419!2sar",
    img: "../assets/corea/line-hotel.jpg",
  },
  {
    hotel: "Fairfield by Marriot",
    lugarubicacion: "Yeongdeungpo-Seul",
    tg: "Hotelería",
    horarios: "Check-in 12:00 - Check-out 11:00",
    sitioweb:
      "https://www.marriott.com/en-us/hotels/selfi-fairfield-by-marriott-seoul/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
    mapas:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.616044585625!2d126.90697031531022!3d37.51697297980715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f42459b69d3%3A0x47d827bc05d70773!2sFairfield%20by%20Marriott%20Seoul!5e0!3m2!1ses-419!2sar!4v1667337018369!5m2!1ses-419!2sar",
    img: "../assets/corea/marriot.jpg",
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
