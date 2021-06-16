import Countdown from ".//countdown.js";

const calParaOWWB = new Countdown("16 june 2021 17:48:00 GMT-0300");
const calendario = document.querySelectorAll("[calendario-time]");


function calendarioTempo() {
    calendario.forEach((calendario, index) => {
        calendario.innerHTML = calParaOWWB.total[index];
    });
}calendarioTempo();
setInterval(calendarioTempo, 1000);

