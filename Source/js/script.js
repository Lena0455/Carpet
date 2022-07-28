   console.log(document.documentElement)

// const inverseDelivery = document.querySelector()
const inverseDelivery = document.querySelectorAll(".delivery-column > div")
console.log(inverseDelivery)

inverseDelivery.forEach((el) => {
    el.addEventListener("click", (event) => {
        event.currentTarget.classList.toggle("card-selected")
        //classList.toggle //метод-переключатель - у элемента будет то добавляться, то убираться класс
        // console.log(event.currentTarget); Объект к которому назначен обработчик
        // toggle(event.currentTarget, "card-selected")
        event.stopPropagation()
    })
})

const inverseDeliveryIcon = document.querySelectorAll('.some-vector')
console.log(inverseDeliveryIcon);

// array1.forEach(element => console.log(element));
// inverseDeliveryIcon.forEach(el => console.log(el));

// forEach(callbackFn)
inverseDeliveryIcon.forEach((elementInverse) => {
    elementInverse.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('delivery-white')
        event.stopPropagation()
    })
})

// Рендер карточек

const carpetItems = [
    {
        image: "/Source/img/uzbek-carpet-chivacarpet-237beige-brown-1-410x410.jpg",
        price: 9790,
        sale: true,
    },
    {
        image: "/Source/img/pexels-max-vakhtbovych-6890403.jpg",
        price: 9790,
        sale: false,
    },
    {
        image: "/Source/img/turkish-carpet-opera-5828ecream-grey-oval-1-410x410.jpg",
        price: 9790,
        sale: true,
    },
]

const favoritesIcon = "/Source/icons/Vector-f.svg"
const cartIcon = "/Source/icons/Vector-5.svg" 

// const carpetsGetElements = document.querySelectorAll('.product-card') // returns an array [el, el, el]

// function renderCarpets(el, items) {
//     items.forEach((item, i) => {
//         const carpetCard = createCarpetHTMLElement(item);
//         const col = i % 3;
//         el[col].appendChild(carpetCard);
//     })

// }


// const carpetsGetEl = document.querySelector('.product-card'); // returns an HTMLElement
const carpetsGetEl = document.getElementById('card-container');
console.log(carpetsGetEl);

renderCarpets(carpetsGetEl, carpetItems)

function renderCarpets(el, items) {
    items.forEach((item) => {
        const carpetCard = createCarpetHTMLElement(item);
        el.appendChild(carpetCard);
    })

}

function createCarpetHTMLElement(item) {
    const carpetCreateDiv = document.createElement('div');

    console.log(carpetCreateDiv);

    const {price, sale, image} = item
    //     const image = item.image;

   //  carpetCreateDiv.innerHTML = `<img src="/Source/img/pexels-max-vakhtbovych-6890403.jpg" alt="carpet" class="block">`


    carpetCreateDiv.innerHTML = `
        <div src="${favoritesIcon}"/div>
        <div src="${cartIcon}"/div>
        <div>${price}</div>
        <span-decoration>${sale}</span-decoration>
        <img src="${image}" alt="carpet" class="block"/>
    `

    return carpetCreateDiv;

}


       // createCarpetHTMLElement.style.width;
       // createCarpetHTMLElement.style.high;
       // createCarpetHTMLElement.classList.block;



/*function toggle(el, classname) {
    if (el.classList.contains(classname)) {
        el.classList.remove(classname)
    } else {
        el.classList.add(classname)
    }
}*/

// let a = [1, 2, 3, "vasiliy", true, 2003]
/*const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);
const childNodes = bodyElement.childNodes;
console.log(bodyElement.hasChildNodes());*/

// // получить элемент
// let red = document.getElementById('red');
//
// // сделать его фон красным
// red.style.background = 'red';


/*let elements = document.querySelectorAll('.title');
for (let elem of elements) {
    alert(elem.innerHTML); // "тест", "пройден"
}*/

// element.addEventListener(event, handler[, options]);

// [button1, button2, button3] [button1] []

/*let buttons = document.querySelectorAll('.success');
for (const button of buttons) {
    button.onclick = () => alert("Привет");
    button.addEventListener("click", handler1); // Спасибо!
    button.addEventListener("click", handler2); // Спасибо ещё раз!
}

function handler1() {
    alert('Спасибо!');
};

function handler2() {
    alert('Спасибо ещё раз!');
}*/
