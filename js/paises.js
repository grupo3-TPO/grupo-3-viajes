// CONECTANDO A LA API
//https://rapidapi.com/HybridWebs/api/countries-states-cities-dataset/
const listaPaises = [
  "Alemania",
  "Andorra",
  "Antigua y Barbuda",
  "Argentina",
  "Australia",
  "Austria",
  "Bélgica",
  "Brasil",
  "Bulgaria",
  "Cabo Verde",
  "Camboya",
  "Canadá",
  "Colombia",
  "Corea del Sur",
  "Costa Rica",
  "Croacia",
  "Egipto",
  "España",
  "Estados Unidos",
  "Finlandia",
  "Fiyi",
  "Francia",
  "Grecia",
  "Guatemala",
  "Hong Kong",
  "India",
  "Indonesia",
  "Irlanda",
  "Islandia",
  "Italia",
  "Jamaica",
  "Japón",
  "Nepal",
  "Noruega",
  "Nueva Zelanda",
  "Perú",
  "Portugal",
  "Puerto Rico",
  "República de Sudáfrica",
  "Samoa Americana",
  "Sierra Leone",
  "Singapur",
  "Tailandia",
  "Turquía",
  "Tuvalu",
];
let cards = document.querySelector(".cards");
let filtroContinentes = document.querySelector(".region-select");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f02373db41mshe152ce5ec374f30p1854e1jsnd2bdb8bfab44",
    "X-RapidAPI-Host": "countries-states-cities-dataset.p.rapidapi.com",
  },
};

getValue();

setInterval(getValue, 100);

function getValue() {
  filtroContinentes = document.querySelector(".region-select").value;
}

getCountries();

async function getCountries() {
  const res = await fetch(
    `https://countries-states-cities-dataset.p.rapidapi.com/list-countries?page=${pagina}`,
    options
  );

  const data = await res.json();
  let countries = data.data.result.data;

  countries.forEach(function (country) {
    if (listaPaises.indexOf(country.translations[0].es) >= 0) {
      console.log(country.translations[0].es);

      let content = `<article class="country-card-container">
                <header class="country-card-header">
                    <h6 class="country-card-title"><a href="/views/${country.translations[0].es.replaceAll(
                      " ",
                      ""
                    )}.html">${
        country.emoji + "<br>" + country.translations[0].es
      }</a></h6>
                </header>
                <section class="country-card-content">
                    <ul class="country-card-data">
                        <li class="country-card-data-item">
                          <i class="fa-solid fa-location-dot location-icon"></i>
                            <p class="country-card-continent">${
                              country.region
                            }</p> 
                        </li>
                        <li class="country-card-data-item">
                            
                            <p class="country-card-data-item-title">Capital:</p>
                            <p class="country-card-language">${
                              country.capital
                            }</p>
                        </li>
                        <li class="country-card-data-item">  
                            
                            <p class="country-card-data-item-title">Zona horaria:</p>
                            <p class="country-card-time">${
                              country.timezones[0].gmtOffsetName
                            }</p>
                        </li>
                        <li class="country-card-data-item">  
                            <p class="country-card-data-item-title">Moneda:</p>
                            <p class="country-card-money">${
                              country.currency + " " + country.currency_symbol
                            }</p>
                        </li>
                    </ul> 
                </section> 
            </article>
    `;

      show();
      function show() {
        if (
          country.region == filtroContinentes ||
          filtroContinentes == "" ||
          filtroContinentes == "Todos"
        ) {
          cards.insertAdjacentHTML("beforeend", content);
        }
      }
    }
  });
}

for (let i = 1; i < 26; i++) {
  pagina = i;
  getCountries();
}

// location.assign(`http://example.com/#${location.pathname}`)
