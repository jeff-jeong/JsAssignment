
const API_KEY = "02a5777bc45c8695aaed9f70d484a91a";
const city = document.querySelector("#weather div:first-child");
const weather = document.querySelector("#weather div:last-child");


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `You live in ${data.name}`;
      weather.innerText = `${data.name}'s weather is ${data.weather[0].main} and temperature is ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("No Weather");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);