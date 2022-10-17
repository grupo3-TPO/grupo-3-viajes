// CONECTANDO A LA API
//https://rapidapi.com/HybridWebs/api/countries-states-cities-dataset/
let cards = document.querySelector(".cards");
let filtroContinentes = document.querySelector(".region-select");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b61f9e325bmshcb0ecf1592d94e1p1f0801jsneeaf2e8bf78e",
    "X-RapidAPI-Host": "countries-states-cities-dataset.p.rapidapi.com",
  },
};

getValue();

setInterval(getValue, 100);

function getValue() {
  filtroContinentes = document.querySelector(".region-select").value;
  console.log(filtroContinentes);
}

getCountries();

async function getCountries() {
  const res = await fetch(
    "https://countries-states-cities-dataset.p.rapidapi.com/list-countries",
    options
  );

  const data = await res.json();
  const countries = data.data.result.data;
  console.log(countries);

  countries.forEach(function (country) {
    let content = `<article class="country-card-container">
                <header class="country-card-header">
                    <h6 class="country-card-title">${
                      country.emoji + "<br>" + country.translations[0].es
                    }</h6>
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
  });
}

// async function getCountries() {
//   const res = await fetch(
//     "https://countries-states-cities-dataset.p.rapidapi.com/list-countries",
//     options
//   );

//   const data = await res.json();
//   let countriesList = data.data.result.data;

//   console.log(countriesList);

//   console.log(data);
//   console.log(data.data.result.next_page_url);

//   const res2 = await fetch(
//     "https://countries-states-cities-dataset.p.rapidapi.com/list-countries?page=2",
//     options
//   );

//   const data2 = await res2.json();
//   let countriesList2 = data2.data.result.data;

//   console.log(countriesList2);
// }

//***************************** /
//###########################

// location.assign(`http://example.com/#${location.pathname}`)
