let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapCount = 1;

function startStopwatch() {
    timer = setInterval(updateStopwatch, 10);
}

function pauseStopwatch() {
    clearInterval(timer);
}

function resetStopwatch() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapCount = 1;
    updateDisplay();
    document.getElementById('laps').innerHTML = '';
}

function lapTime() {
    const lapTime = document.createElement('li');
    lapTime.textContent = `Lap ${lapCount}: ${formatTime()}`;
    lapCount++;
    document.getElementById('laps').appendChild(lapTime);
}

function updateStopwatch() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('minutes').innerText = padTime(minutes);
    document.getElementById('seconds').innerText = padTime(seconds);
    document.getElementById('milliseconds').innerText = padTime(milliseconds);
}

function padTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatTime() {
    return `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
}
