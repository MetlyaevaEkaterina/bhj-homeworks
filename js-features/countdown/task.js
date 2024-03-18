const timerDown = function() {
    const timer = document.getElementById("timer");
    if (timer.textContent > 0) {
        timer.textContent--;
    } else {
        alert("Вы победили в конкурсе!");
        timer.textContent = 59;
        return;
    }
}

setInterval(timerDown, 1000);
