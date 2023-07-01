const busInfo = 'https://karenavila0612.github.io/wdd230/chamber/json/data.json';


async function getBusData(busInfo) {
    const response = await fetch(busInfo);
    if (response.ok) {
        const data = await response.json();
        createCards(data.businesses);
    }
}


getBusData(busInfo);

const createCards = (business) => {
    const cards = document.querySelector('#business-cards');

    business.forEach(business => {
        let container = document.createElement('section');
        let icon = document.createElement('img');
        let busName = document.createElement('h2');
        let fullInfo = document.createElement('p');
        let memLevel = document.createElement('p');

        busName.innerHTML = `${business.name}`;

        icon.setAttribute('src', business.logo);
        icon.setAttribute('alt', `Logo for ${business.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '100');
        icon.setAttribute('height', '100');

        

        fullInfo.innerHTML = `${business.address}<br>${business.phone}<br><a href='${business.url}'>${business.url}</a><p>${business.other}</p>`;

        memLevel.setAttribute('title', business.level);
        memLevel.setAttribute('id', 'membership');

        if (memLevel.title == 'gold') {
            memLevel.innerHTML = `FMCC Gold Level Member`;
            memLevel.style.backgroundColor = '#d4af37';
        }
        if (memLevel.title == 'silver') {
            memLevel.innerHTML = `FMCC Silver Level Member`;
            memLevel.style.backgroundColor = '#c0c0c0';

        }
        if (memLevel.title == 'bronze') {
            memLevel.innerHTML = `FMCC Bronze Level Member`;
            memLevel.style.backgroundColor = '#cd7f32';

        }
        if (memLevel.title == 'non-profit') {
            memLevel.innerHTML = `FMCC Non-Profit Member`;
            memLevel.style.backgroundColor = '#5ce1e6';

        }

        container.appendChild(icon);
        container.appendChild(busName);
        container.appendChild(fullInfo);
        container.appendChild(memLevel);

        cards.appendChild(container);
        
    });
}