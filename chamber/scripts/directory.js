// Directory script
const directoryData = './data.json';
const gridButton = document.querySelector('.gridDisplay');
const listButton = document.querySelector('.listDisplay');
const display = document.querySelector('article')

fetch(directoryData)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const companies = jsonObject['companies'];
        companies.forEach(displayCompany);
    });

gridButton.addEventListener("click", () => {
    display.classList.add("cards");
    display.classList.remove("lists");
});

listButton.addEventListener("click", () => {
    display.classList.add("lists");
    display.classList.remove("cards");
});

function displayCompany(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let logoBox  = document.createElement('div')
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let webUrl = document.createElement('a')
    let membership = document.createElement('p')

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${company.companysName}`;
    address.innerHTML = ["<strong>Address: </strong>", company.location].join(" ");
    phoneNumber.innerHTML = " ".concat("<strong>Number: </strong>", company.phoneNumber);
    webUrl.textContent = company.webUrl;
    membership.innerHTML = ["<strong>Member Level: </strong>", company.membershipLevel].join(" ");

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', company.logo);
    logo.setAttribute('alt', company.companysName);
    logo.setAttribute('loading', 'lazy');
    webUrl.setAttribute('href', company.webUrl);

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(logoBox);
    logoBox.appendChild(logo)
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(membership)
    card.appendChild(webUrl)


    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.cards').appendChild(card);
}