let value = document.querySelector(".dropdown__value");
let list = document.querySelector(".dropdown__list");
let links = Array.from(document.querySelectorAll(".dropdown__link"));

value.onclick = function() {
    list.classList.toggle("dropdown__list_active");
}

links.forEach(elem => {
    elem.addEventListener("click", event => {
        value.textContent = elem.textContent;
        list.classList.toggle("dropdown__list_active");
        event.preventDefault();
    })
});