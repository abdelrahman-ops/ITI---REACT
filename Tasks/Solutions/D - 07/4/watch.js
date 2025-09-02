

let hours = 0, minutes = 0, seconds = 0;
let timerInterval = null;
let paused = false;

function updateDisplay() {
    document.getElementById("timer").textContent = 
    `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

function startTimer() {
    if (timerInterval) return; // prevent double interval
    timerInterval = setInterval(() => {
        if (!paused) {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
        }
    }, 1000);
}

function togglePause() {
    paused = !paused;
    const btn = document.getElementById("pauseBtn");
    if (paused) {
        btn.textContent = "Continue";
        btn.classList.remove("pause");
        btn.classList.add("continue");
    } else {
        btn.textContent = "Pause";
        btn.classList.remove("continue");
        btn.classList.add("pause");
    }
}

function clearTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    hours = minutes = seconds = 0;
    paused = false;
    updateDisplay();
    const btn = document.getElementById("pauseBtn");
    btn.textContent = "Pause";
    btn.classList.remove("continue");
    btn.classList.add("pause");
    startTimer();
}

// Start timer immediately on load
window.onload = function() {
    updateDisplay();
    startTimer();
};
