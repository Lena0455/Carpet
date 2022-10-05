// const carpetsEl = document.getElementById("items");

// renderCarpets(carpetsEl, carpetItems);

// корзина
const cart = [];

function renderCarpets(el, items) {
    items.forEach((item) => {
        const carpet = createCarpetHTMLElement(item);
        addCardListeners(carpet);

        el.appendChild(carpet);
    })
}

function addCardListeners(cardHTMLElement) {
    const addToCart = cardHTMLElement.querySelector('.add-to-cart')

    // добавляем слушатель для конкретной карточки с добавлением соотв. товара.
    addToCart.addEventListener('click', (event) => {
        // добавляем товар из карточки в корзину
        cart.push(item);
        console.log(cart);
    })
}

function createCarpetHTMLElement(item) {
    const el = document.createElement('div');

    // destructuring assignment
    const {name, description, image, price} = item;
    // const image = item.image;

    el.innerHTML = `
        <h1>${name}</h1>
        <p>${description}</p>
        <img src="${image}"/>
        <span>${price}</span>

        <button class="add-to-cart">add to cart</button>
    `

    return el;
}

const carpetItems = [
    {
        name: "carpet #1",
        description: "some description...",
        image: "http://laskjdfas.com/1.jpg",
        price: 9900
    },
    {
        name: "carpet #2",
        description: "some description...",
        image: "http://laskjdfas.com/1.jpg",
        price: 9900
    },
    {
        name: "carpet #3",
        description: "some description...",
        image: "http://laskjdfas.com/1.jpg",
        price: 9900
    },
]

const cart_ = [];

cart_.push(carpetItems[0], carpetItems[0], carpetItems[1], carpetItems[2]);

console.log(cart_);

// 
const sum = cart_.reduce((sum, currentElement) => sum += currentElement.price, 0); 

// const sum = cart_.reduce((acc, el) => {
//     return acc += el.price
// }, 0); 

console.log("sum: ", sum);


// const carpetItems = [];
// fetchItems() // get items from server
