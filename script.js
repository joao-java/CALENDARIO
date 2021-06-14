import Countdown from "./countdown.js";

const enemParaOWWB = new Countdown("30 junie 2021 20:00:00 GMT-0300");

const calendario = document.querySelectorAll("[enem-time]");


function calendarioTempo() {
    calendario.forEach((calendario, index) => {
        calendario.innerHTML = enemParaOWWB.total[index];
    });
}
calendarioTempo();
setInterval(calendarioTempo, 1000);
