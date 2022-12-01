const data = './data.json';
const spotlight = document.querySelector('#spotlight-box');

fetch(data)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const companies = jsonObject['companies'];
        const randomIndexList = getRandomNums(companies);

        console.log(randomIndexList);
        randomIndexList.forEach(displaySpotlight);
    });

function getRandomNums(companiesList) {
    const remixList = companiesList.sort(() => 0.5 - Math.random());
    return remixList.slice(0, 3);
}

function displaySpotlight(company, num) {
    let divBox = document.createElement('div');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p = document.createElement('p');
    let line = document.createElement('div');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');

    divBox.setAttribute('class', "spotlight")
    divBox.setAttribute('id', `spot${num + 1}`)
    h2.textContent = `${company.companysName}`;
    img.setAttribute('src', company.logo);
    img.setAttribute('alt', company.companysName);
    img.setAttribute('loading', 'lazy');
    line.setAttribute('id', 'line')
    p.innerHTML = `<strong>Membership Level: </strong>${company.membershipLevel}`;
    address.innerHTML = `<strong>Address: </strong>${company.location}`;
    phoneNumber.innerHTML = `<strong>Number: </strong>${company.phoneNumber}`;

    divBox.appendChild(h2);
    divBox.appendChild(img);
    divBox.appendChild(line);
    divBox.appendChild(p);
    divBox.appendChild(phoneNumber);
    divBox.appendChild(address);

    document.querySelector('#spotlight-box').appendChild(divBox);
}