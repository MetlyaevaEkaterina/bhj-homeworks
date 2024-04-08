const ads = Array.from(document.querySelectorAll(".rotator__case"));

setInterval(() => {
    const index = ads.findIndex(item => item.classList.contains("rotator__case_active"));
    let currrentAds = ads[index];

    currrentAds.classList.remove("rotator__case_active");
    currrentAds = Math.floor(Math.random() * ads.length);
    ads[currrentAds].classList.add("rotator__case_active");
}, 1000);