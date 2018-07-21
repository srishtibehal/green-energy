const topics = {
    solar: {
        title: "SOLAR ENERGY",
        image: "img/solar.jpg",
        bodyText: "Solar intertie photovoltaic (PV) systems are not particularly complex. First there are panels, which collect the sunlight and turn it into electricity. The DC signals are fed into an inverter, which converts the DC into grid-compatible AC power (which is what you use in your home). Various switch boxes are included for safety reasons, and the whole thing is connected via wires and conduit."
    },
    water: {
        title: "THE POWER OF WATER",
        image: "img/green.jpg",
        bodyText: "Hydropower is using water to power machinery or make electricity. Water constantly moves through a vast global cycle, evaporating from lakes and oceans, forming clouds, precipitating as rain or snow, then flowing back down to the ocean. The energy of this water cycle, which is driven by the sun, can be tapped to produce electricity or for mechanical tasks like grinding grain. Hydropower uses a fuel—water—that is not reduced or used up in the process. Because the water cycle is an endless, constantly recharging system, hydropower is considered a renewable energy."
    },
    wind: {
        title: "WIND TURBINES",
        image: "img/sunrays.jpg",
        bodyText: "Wind power is a clean energy source that can be relied on for the long-term future. A wind turbine creates reliable, cost-effective, pollution free energy. It is affordable, clean and sustainable. One wind turbine can be sufficient to generate energy for a household.Because wind is a source of energy which is non-polluting and renewable, wind turbines create power without using fossil fuels, without producing greenhouse gases or radioactive or toxic waste."
    }
};


// this tries to access a property of topics-object first with dot, and then with bracket syntax

const buttons = document.querySelectorAll(".buttons button");
const article = document.querySelector("article");

// Load your images on page-load
function preloader() {
    const imagesList = [
       "/img/solar.jpg",
       "/img/green.jpg",
       "/img/sunrays.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);


function loadContent(e) {
    let clickedBtn = e.target;
    let key = clickedBtn.getAttribute("data-content");

    article.innerHTML = `<h3>${topics[key].title}</h3><img src="${topics[key].image}"><p>${topics[key].bodyText}</p>`;


}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", loadContent);
}
