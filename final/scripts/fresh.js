let totalCarb = 0;
let totalProtein = 0;
let totalFat = 0;
let totalSugar = 0;
let totalCals = 0;

// get data in local storage
let numDrinks = Number(window.localStorage.getItem("drinks-Number"));
let orderIngredients = JSON.parse(localStorage.getItem("orders"));
console.log(orderIngredients)

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const ingredient1 = document.querySelector("#ingredient1");
const ingredient2 = document.querySelector("#ingredient2");
const ingredient3 = document.querySelector("#ingredient3");
const instruction = document.querySelector("#instruction");

// get fruits data
const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const fruits = await response.json();
            console.log(fruits);
            fruits.forEach(calculateNutrition);
            createCard()
            return false
        }else {
            Error(await response.text());
        }

        console.log("this should show up first")
    }catch (error) {
        console.log(error);
    }
}

// calculate the nutrition
function calculateNutrition(fruit) {
    if (ingredient1.value === fruit.name){
        console.log(fruit.name)
        totalCarb += parseFloat(fruit.nutritions.carbohydrates);
        totalProtein += parseFloat(fruit.nutritions.protein);
        totalFat += parseFloat(fruit.nutritions.fat);
        totalSugar += parseFloat(fruit.nutritions.sugar);
        totalCals += parseFloat(fruit.nutritions.calories);
        console.log(totalCarb)
    }
    if (ingredient2.value === fruit.name){
        console.log(fruit.name)
        totalCarb += parseFloat(fruit.nutritions.carbohydrates);
        totalProtein += parseFloat(fruit.nutritions.protein);
        totalFat += parseFloat(fruit.nutritions.fat);
        totalSugar += parseFloat(fruit.nutritions.sugar);
        totalCals += parseFloat(fruit.nutritions.calories);
        console.log(totalCarb)
    }
    if (ingredient3.value === fruit.name) {
        console.log(fruit.name)
        totalCarb += parseFloat(fruit.nutritions.carbohydrates);
        totalProtein += parseFloat(fruit.nutritions.protein);
        totalFat += parseFloat(fruit.nutritions.fat);
        totalSugar += parseFloat(fruit.nutritions.sugar);
        totalCals += parseFloat(fruit.nutritions.calories);
        console.log(totalCarb)
    }
}


// blend cards
function createCard() {
    //apiFetch()
    console.log("this should show up second")
    // create elements
    let box = document.createElement("div");
    let name_p = document.createElement("p");
    let email_p = document.createElement("p");
    let number_p = document.createElement("p");
    const ingredientTitle = document.createElement('p');
    let ingred_list = document.createElement("ol");
    let ingred1_li = document.createElement("li");
    let ingred2_li = document.createElement("li");
    let ingred3_li = document.createElement("li");

    // set value
    name_p.innerHTML = `<strong>Name: </strong>${name.value}`;
    email_p.innerHTML = `<strong>Email: </strong>${email.value}`;
    number_p.innerHTML = `<strong>Number: </strong>${number.value}`;
    ingredientTitle.innerHTML = `<strong>Ingredients:</strong>`;
    ingred1_li.textContent = ingredient1.value;
    ingred2_li.textContent = ingredient2.value;
    ingred3_li.textContent = ingredient3.value;

    box.setAttribute('class', "outputBox");
    name_p.setAttribute('class', "blend-name");
    email_p.setAttribute('class', "blend-email");
    number_p.setAttribute('class', "blend-number");
    ingredientTitle.setAttribute('class', "ingred-title");
    ingred_list.setAttribute('class', "blend-list");

    // add elements
    box.appendChild(name_p);
    box.appendChild(email_p);
    box.appendChild(number_p);
    box.appendChild(ingredientTitle);
    box.appendChild(ingred_list);
    ingred_list.appendChild(ingred1_li);
    ingred_list.appendChild(ingred2_li);
    ingred_list.appendChild(ingred3_li);

    //check value
    console.log(instruction.value);
    if (instruction.value !== '') {
        const instru_p = document.createElement("p");
        instru_p.innerHTML = `<strong>Instruction: </strong><br>${instruction.value}`;
        instru_p.setAttribute('class','blend-intruct')
        box.appendChild(instru_p)
    }

    // nutrition card
    // create elements
    let divBox = document.createElement('div');
    let h2 = document.createElement('h2');
    let hr = document.createElement('hr');
    let amountP = document.createElement('p');
    let calP = document.createElement('p');
    let carbP = document.createElement('p');
    let proteinP = document.createElement('p');
    let fatP = document.createElement('p');
    let sugarP = document.createElement('p');

    // set value
    h2.textContent = "Nutrition Facts";
    amountP.innerHTML = "<strong>Amount Per Serving</strong>";
    calP.innerHTML = `<strong>Calories</strong> <span>${totalCals.toFixed(0)}</span>`;
    carbP.innerHTML = `<strong>Carbohydrates</strong> <span>${totalCarb.toFixed(1)} g</span>`;
    proteinP.innerHTML = `<strong>Protein</strong> <span>${totalProtein.toFixed(1)} g</span>`;
    fatP.innerHTML = `<strong>Fat</strong> <span>${totalFat.toFixed(1)} g</span>`;
    sugarP.innerHTML = `<strong>Sugar</strong> <span>${totalSugar.toFixed(1)} g</span>`;
    hr.style.backgroundColor = "black";

    divBox.setAttribute('id', "nutritionBox");

    // append
    box.appendChild(divBox);
    divBox.appendChild(h2);
    divBox.appendChild(hr);
    divBox.appendChild(amountP);
    divBox.appendChild(calP);
    divBox.appendChild(carbP);
    divBox.appendChild(proteinP);
    divBox.appendChild(fatP);
    divBox.appendChild(sugarP);

    console.log(totalCarb);
    console.log(totalCals);

    const timeP = document.createElement('p');
    let hour = new Date().getHours();
    let mins = new Date().getMinutes();
    hour = timeTransfer(hour);
    mins = timeTransfer(mins);
    timeP.textContent = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${hour}:${mins}`;
    timeP.setAttribute('id','order-time')
    box.appendChild(timeP);

    document.querySelector(".data-form").appendChild(box);

    totalCarb = 0;
    totalProtein = 0;
    totalFat = 0;
    totalSugar = 0;
    totalCals = 0;

    saveLocalValues()
}

function timeTransfer(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

function saveLocalValues(){
    // increment the number of visits.
    numDrinks++;
    // store the new number of visits value
    localStorage.setItem("drinks-Number", numDrinks.toString());

    // append ingredients
    const arr = `[${ingredient1.value}, ${ingredient2.value}, ${ingredient3.value}]`;
    if(orderIngredients == null){
        orderIngredients = []
        orderIngredients.push(arr);
        console.log(orderIngredients)
        localStorage.setItem('orders', JSON.stringify(orderIngredients))

    }else {
        console.log(orderIngredients)
        orderIngredients.push(arr);
        console.log(orderIngredients)
        localStorage.setItem('orders', JSON.stringify(orderIngredients));
    }
}