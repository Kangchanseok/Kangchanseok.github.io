const API_KEY = "5eeb94aa3205ab8ab319fff45db5710c";

function geoOn(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("당신의 위치는 ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    
    fetch(url)
    .then(Response => Response.json()
    .then(data => {
        
        
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `날씨: ${data.weather[0].main} 
        온도: ${Math.floor(data.main.temp)}°C\n`;
        city.innerText = `위치: ${data.name}`;
       
    }));


}

function geoErr(){
    alert("위치를 못찾겠습니다");


}

navigator.geolocation.getCurrentPosition(geoOn,geoErr);