const API_KEY = "f9dce3a4be9cfdbf4a69fd38807fb936";

function onGeoOk(position){
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });


}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//위치 좌표를 줌. (정상실행시, 오류시)