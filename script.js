const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");

function reloadTime(){
    const currentYear = new Date().getFullYear();
    const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
    const currentDate = new Date();
    const diff = newYear - currentDate;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) %24);
    const m = Math.floor((diff / 1000 /60) %60);
    const s = Math.floor((diff / 1000) %60);



    // console.log(d + ""+h+""+m+""+s);

    days.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;

}

setInterval(reloadTime, 1000);


