let countryName = document.getElementById("country-name");
let flag = document.getElementById("country-flag");
let selectedCountry = document.getElementById("country-name").value;
let defaultOption = document.createElement("option");
defaultOption.text = "Country Name";
countryName.add(defaultOption);
countryName.selectedIndex = 0;
const getCountryName = () => {
fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        populateCountryDropdown(data);
    });
};

function populateCountryDropdown(data){
let option;
data.forEach(country => {
    option = document.createElement("option");
    option.text = country.name;
    option.value = country.flag;
    countryName.add(option);
})
}

function displayFlag(){
let selectedCountry = document.getElementById("country-name").value;
let image = document.getElementById("flag");
image.src=selectedCountry;
}
async function registerSW()
{
if ("serviceWorker" in navigator) {
if (navigator.serviceWorker.controller) {
    console.log("Service worker found, no need to register");
} else {
    // Register the service worker
    navigator.serviceWorker
    .register("service-worker.js", {
        scope: "./"
    })
    .then(function (reg) {
        console.log("Service worker has been registered for scope: " + reg.scope);
    });
}
}}


window.onload = getCountryName();
window.onload = registerSW();