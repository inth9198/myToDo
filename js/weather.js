const API_KEY = "f9dce3a4be9cfdbf4a69fd38807fb936";
images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const changeBg = (idx) =>{
    let choseImage = images[idx];
    console.log(choseImage)
    const bgImage = document.createElement("img");
    bgImage.src = `img/${choseImage}`;
    bgImage.classList.add("bgImage");
    document.body.appendChild(bgImage);
}


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
        const bgNum = document.querySelector("#backgroundN");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        if (data.weather[0].main === "Snow")
        {
            changeBg(3);
        }
        else if (data.weather[0].main === "Clouds")
        {
            changeBg(1);
        }
        else if (data.weather[0].main === "Clear")
        {
            changeBg(0);
        }
        else
        {
            changeBg(2);
        }
    });

}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//위치 좌표를 줌. (정상실행시, 오류시)
