// const clock = document.getElementById("clock");
// // console.log(clock);
// let seconds=0;
// setinterval(()=>{
//     seconds++;
//     clock.innerText=seconds;
// },1000)



const clock = document.getElementById("clock");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapArea = document.querySelector(".laparea");

let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;

function updateDisplay() {
    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");

    clock.innerText = `${h}:${m}:${s}`;
}

function startWatch() {
    if (timer !== null) return;

    timer = setInterval(() => {

        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }

        updateDisplay();

    }, 1000);
}

function stopWatch() {
    clearInterval(timer);
    timer = null;
}

function resetWatch() {
    stopWatch();

    hours = 0;
    minutes = 0;
    seconds = 0;

    updateDisplay();

    lapArea.innerHTML = "Lap Records";
}

function addLap() {

    if (
        hours === 0 &&
        minutes === 0 &&
        seconds === 0
    ) return;

    const lap = document.createElement("p");

    lap.innerText = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    lapArea.appendChild(lap);
}

updateDisplay();

startBtn.addEventListener("click", startWatch);
stopBtn.addEventListener("click", stopWatch);
resetBtn.addEventListener("click", resetWatch);
lapBtn.addEventListener("click", addLap);