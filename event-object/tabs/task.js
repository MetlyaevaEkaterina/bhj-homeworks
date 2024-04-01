const tabs = [...document.querySelectorAll(".tab")];
const contents = [...document.querySelectorAll(".tab__content")];

tabs.forEach((tab, index) => 
    tab.addEventListener("click", () => {
        for(let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("tab_active");
            contents[i].classList.remove("tab__content_active");
        }
        tab.classList.add("tab_active");
        contents[index].classList.add("tab__content_active")
    }));