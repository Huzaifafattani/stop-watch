let time = 0;
let running = 0;

function start() {
  if (!running) {
    running = 1;
    timer = setInterval(run, 10);
  }
}

function run() {
  time++;
  let mins = Math.floor(time / 100 / 60);
  let secs = Math.floor(time / 100);
  let msecs = time % 100;
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs >= 60) {
    secs = secs % 60;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  document.querySelector(".display").innerHTML = mins + ":" + secs + ":" + msecs;
}

function stop() {
  running = 0;
  clearInterval(timer);
}

function reset() {
  running = 0;
  clearInterval(timer);
  time = 0;
  document.querySelector(".display").innerHTML = "00:00:00";
}

document.querySelector(".start").addEventListener("click", start);
document.querySelector(".stop").addEventListener("click", stop);
document.querySelector(".reset").addEventListener("click", reset);
