const busInfo = 'https://karenavila0612.github.io/wdd230/chamber/json/data.json';


async function getListData(busInfo) {
    const response = await fetch(busInfo);
    if (response.ok) {
        const data = await response.json();
        console.table(data.businesses);
        createList(data.businesses);
    }
}

getListData(busInfo);

const createList = (business) => {
    const table = document.querySelector('#business-cards');
    table.style.display = 'block';
    table.style.border = "2px solid #097b02"
    table.style.maxWidth = 'fit-content';


    business.forEach(business => {
        let row = document.createElement('tr');
        let compName = document.createElement('th');
        let address = document.createElement('td');
        let phoneNum = document.createElement('td');
        let row2 = document.createElement('tr');
        let website = document.createElement('td');
        let blankRow= document.createElement('tr');

        compName.innerHTML = `${business.name}`;
        address.innerHTML = `${business.address}`;

        phoneNum.textContent = `${business.phone}`;

        website.innerHTML = `<a href='${business.url}'>${business.url}</a>`;
        website.style.textAlign = 'center';
        website.setAttribute('colspan', '3');

        blankRow.setAttribute('colspan', '3');
        blankRow.setAttribute('height', '20');

        row.appendChild(compName);
        row.appendChild(address);
        row.appendChild(phoneNum);
        // row.appendChild(website);

        row2.appendChild(website);

        table.appendChild(row);
        table.appendChild(row2);
        table.appendChild(blankRow);
    });
}