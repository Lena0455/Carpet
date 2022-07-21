const carpetsEl = document.getElementById("items");

renderCarpets(carpetsEl, carpetItems);

function renderCarpets(el, items) {
    items.forEach((item) => {
        const carpet = createCarpetHTMLElement(item);
        el.appendChild(carpet);
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

// const carpetItems = [];
// fetchItems() // get items from server
