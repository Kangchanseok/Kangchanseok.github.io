const clock = document.querySelector(".clock");
const WEEKDAY = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

function getClock (){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    // const seconds = String(now.getSeconds()).padStart(2,"0");
    const years = now.getFullYear();
    const months = now.getMonth()+1;
    const days  = now.getDate();
    const days2 = WEEKDAY[now.getDay()];
    clock.innerText = `${hours}:${minutes}
    ${years}/${months}/${days} ${days2}`;

}
getClock();
setInterval(getClock,1000);


