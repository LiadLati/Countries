const getDetailsOfCountry = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const countryDetails = JSON.parse(localStorage.getItem("countryDetails"));
    
        if (countryDetails) {
            console.log("Country Details on details.html:", countryDetails);
            document.querySelector(".main-country-flag").innerHTML = `<img class="country-flag" src="${countryDetails.flag}" alt="${countryDetails.name} flag" />`;
            document.querySelector(".country-name").innerHTML = `${countryDetails.name}`;
            document.querySelector(".country-population").innerHTML = `<b>Population:</b> ${countryDetails.population}`;
            document.querySelector(".country-region").innerHTML = `<b>Region:</b> ${countryDetails.region}`;
            document.querySelector(".country-capital").innerHTML = `<b>Capital:</b> ${countryDetails.capital}`;
        } else {
            console.error("No country details found in localStorage.");
        }
    });
    
}
getDetailsOfCountry()
