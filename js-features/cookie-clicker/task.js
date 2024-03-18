const element = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

element.onclick = function() {
    if (counter.textContent % 2 === 0) {
        element.width = 250;
    } else {
        element.width = 200;
    }
    counter.textContent++;
}
    