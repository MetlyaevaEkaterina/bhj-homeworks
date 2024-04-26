const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));
const tooltip = document.createElement("div");
tooltip.classList.add("tooltip_active");
tooltip.classList.add("tooltip");

tooltips.forEach((el, index) => {
    el.addEventListener('click', event => {
        event.preventDefault();
        if (el.previousElementSibling === tooltip) {
          tooltip.classList.toggle('tooltip_active')
        } else {
          tooltips[index].parentNode.insertBefore(tooltip, tooltips[index]);
          tooltip.textContent = tooltips[index].title
        }
      
        const coords = tooltips[index].getBoundingClientRect();
        let left = coords.left;
        let top = coords.top - tooltip.offsetHeight + 50;

        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
}); 
})