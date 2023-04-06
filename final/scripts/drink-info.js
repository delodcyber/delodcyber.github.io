// drinks number
let numDrinks = Number(window.localStorage.getItem("drinks-Number"));
document.getElementById('drinksNum').innerHTML = `<strong>${numDrinks.toString()}</strong>`;
document.getElementById('small-drinksNum').innerHTML = `<strong>${numDrinks.toString()}</strong>`;

// create list of orders
const orders = JSON.parse(localStorage.getItem('orders'));
console.log(orders)

const numberCard = document.getElementById('drink-numbers');
if (numDrinks.toString() !== "0"){
    const ul = document.getElementById('order-ingredients');
    if (orders.length >= 5){
        orders.length = 5
    }
    for(let i = 0; i < orders.length; i++) {
        const li = document.createElement('li');
        let text = orders[i].replace('[', '');
        text = text.replace(']', '');
        li.textContent = `${text}`;
        console.log(li.textContent)
        ul.appendChild(li);

        if (i < 3) {
            let orderUl = document.getElementById(`order${i+1}`)
            const newUl = document.createElement('ul');
            const textList = text.split(', ');
            console.log(textList)

            for (let j = 0; j < textList.length; j++) {
                const ingredLi = document.createElement('li');
                ingredLi.textContent = textList[j];
                newUl.appendChild(ingredLi);
            }
            orderUl.innerHTML = newUl.innerHTML;
        }
    }
}else {
    const message = document.createElement('a');
    message.innerHTML = `<strong>Create Your Specialty Drink NOW!</strong>`
    message.setAttribute('href', 'fresh.html');
    numberCard.appendChild(message);
}

