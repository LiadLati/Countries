fetch('./CountriesData.json')
    .then(response => response.json())
    .then(countriesJson => {
        displayCountries(countriesJson)
    })
    .catch(error => console.error('Error loading JSON:', error));


const displayCountries = (countries) => {
    const countriesContainer = document.querySelector('.countries-grid');
    const isDarkMode = document.body.classList.contains('dark-theme');
    countriesContainer.innerHTML = '';
    countries.forEach(country => {
        const countryDiv = `
      <a href ="details.html"
        onclick="setDetailsOfCountry('${country.flag}','${country.name}','${country.population}','${country.region}','${country.capital}')"
        class="country scale-effect countryDiv"
        data-country-name="Afghanistan">
        <div class="country-flag">
          <img src="${country.flag}"/>
        </div>
        <div class="${isDarkMode ? 'dark-country-info' : 'country-info'}">
          <h2 class="${isDarkMode ? 'dark-country-title' : 'country-title'}">${country.name}</h2>
          <ul class="country-brief">
            <li><strong>population: </strong>${country.population}</li>
            <li><strong>Region: </strong>${country.region}</li>
            <li><strong>capital: </strong>${country.capital}</li>
          </ul>
        </div>
      </a>
    `;
        countriesContainer.innerHTML += countryDiv;
    });
}


const darkMode = () => {
    const lightBody = document.querySelector('.body');
    const darkBody = document.querySelector('.dark-theme');
    const headerBackgroundColor = getComputedStyle(document.querySelector('header')).backgroundColor;
    const countryDivs = document.querySelectorAll('.country-info');
    const countryNames = document.querySelectorAll('.country-title');
    const darkCountryDivs = document.querySelectorAll('.dark-country-info');
    const darkCountryNames = document.querySelectorAll('.dark-country-title');

    if (headerBackgroundColor === 'rgb(255, 255, 255)') {
        lightBody.className = 'dark-theme'
        countryDivs.forEach(div => {
            div.className = 'dark-country-info'
        });
        countryNames.forEach(div => {
            div.className = 'dark-country-title'
        });

    } else {
        darkBody.className = 'body';
        darkCountryDivs.forEach(div => {
            div.className = 'country-info'
        });
        darkCountryNames.forEach(div => {
            div.className = 'country-title'
        });
    }
};


const setDetailsOfCountry = (flag, name, population, region, capital) => {
    const countryDetails = { flag, name, population, region, capital };
    localStorage.setItem("countryDetails", JSON.stringify(countryDetails));
    console.log("Country details saved:", countryDetails);
};

const openDropDown = () => {
    const dropDown = document.querySelector('.dropdown-wrapper');
    dropDown.addEventListener('click', () => {
        dropDown.classList.toggle('open');
    })
}
openDropDown();

const filterByContinants = () => {
    const regions = document.querySelectorAll('.dropdown-body li');
    regions.forEach((li) => {
        const chosenRegion = li.getAttribute('data-region');
        li.addEventListener('click', () => {
            fetch('./CountriesData.json')
                .then(response => response.json())
                .then(countriesJson => {
                    let filteredCountries = countriesJson;
                    if (chosenRegion == 'africa') {
                        filteredCountries = filteredCountries.filter(country => country.region === 'Africa');
                    }
                    if (chosenRegion == 'america') {
                        filteredCountries = filteredCountries.filter(country => country.region === 'Americas');
                    }
                    if (chosenRegion == 'asia') {
                        filteredCountries = filteredCountries.filter(country => country.region === 'Asia');
                    }
                    if (chosenRegion == 'europe') {
                        filteredCountries = filteredCountries.filter(country => country.region === 'Europe');
                    }
                    if (chosenRegion == 'oceania') {
                        filteredCountries = filteredCountries.filter(country => country.region === 'Oceania');
                    }
                    displayCountries(filteredCountries);
                })
                .catch(error => console.error('Error loading JSON:', error));
        })
    })
}
filterByContinants();

const searchCountry = () => {
}

