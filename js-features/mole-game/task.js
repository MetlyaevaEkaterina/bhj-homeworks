const deadMole = document.getElementById("dead");
const lostMole = document.getElementById("lost");

getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = function() {
    if (hole.className.includes('hole_has-mole')) {
        deadMole.textContent++;
    } else {
        lostMole.textContent++;
    }
    if (lostMole.textContent == 5) {
        alert("Вы проиграли!");
        lostMole.textContent = 0;
        deadMole.textContent = 0;
        return;
    } 
    if (deadMole.textContent == 10) {
        alert("Вы победили!");
        lostMole.textContent = 0;
        deadMole.textContent = 0;
        return;
    }
}
}