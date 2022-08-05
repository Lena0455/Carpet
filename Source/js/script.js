console.log(document.documentElement)

// const inverseDelivery = document.querySelector('.')
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
        image: "/Source/img/uzbek-carpet-chivacarpet-237beige-brown-1-410x410.jpg",
        price: 9790,
        sale: true,
    },
    {
        image: "/Source/img/pexels-max-vakhtbovych-6890403.jpg",
        price: 8790,
        sale: false,
    },
    {
        image: "/Source/img/turkish-carpet-opera-5828ecream-grey-oval-1-410x410.jpg",
        price: 17790,
        sale: true,
    },
    {
        image: "/Source/img/pexels-max-vakhtbovych-6890403.jpg",
        price: 8790,
        sale: false,
    },
    {
        image: "/Source/img/turkish-carpet-opera-5828ecream-grey-oval-1-410x410.jpg",
        price: 17790,
        sale: true,
    },
    {
        image: "/Source/img/pexels-tatiana-syrikova-3932930.jpg",
        price: 117790,
        sale: true,
    },
    {
        image: "/Source/img/turkish-carpet-vista-a068agrey-brown-1-410x410.jpg",
        price: 790,
        sale: true,
    },
    {
        image: "/Source/img/pexels-tatiana-syrikova-3932930.jpg",
        price: 117790,
        sale: true,
    },
    {
        image: "/Source/img/turkish-carpet-vista-a068agrey-brown-1-410x410.jpg",
        price: 790,
        sale: true,
    },
    {
        image: "/Source/img/pexels-tatiana-syrikova-3932930.jpg",
        price: 117790,
        sale: true,
    },
    {
        image: "/Source/img/turkish-carpet-vista-a068agrey-brown-1-410x410.jpg",
        price: 790,
        sale: true,
    },
]

const favoritesIcon = "icon-Vector-4"
const cartIcon = "icon-Vector-5"

// const favoritesIcon = "/Source/icons/Vector-f.svg"
// const cartIcon = "/Source/icons/Vector-5.svg"

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

    const {price, sale, image} = item
    //     const image = item.image;

    carpetCreateDiv.innerHTML = `
        <img src="${image}" alt="carpet" class="img-block"/>
           <div class="icon-positions-favorites">
             <a href=""  class="favorites item__social icon-img icon-one"><i class="${favoritesIcon}"></i></a>
                <!-- <div class="favorites"><img class="icon-img" src="${favoritesIcon}" alt="cart"</div>--> 
            </div>
           <div class="icon-positions-cart">
             <a href="" class="cart icon-img item__social icon-img icon-two"><i class="${cartIcon}"></i></a>
                <!-- <div class="cart"><img class="icon-img" src="${cartIcon}" alt="cart"</div>-->
           </div>
        </div>
        
        <div class="product-details">
          <div class="product-price">
            <span-decoration>${sale}</span-decoration>
               <span-decoration>
                 <p class="rub">₽</p>
               </span-decoration>
            <div class="price">${price}</div>
            <p class="rub">₽</p>
          </div>
        </div>
    `

    return carpetCreateDiv;

}

/*   const elViolet = document.querySelector('#violet')
   console.log(elViolet.classList)
   elViolet.classList.add('product-details')*/


// const elViolet = document.getElementById('violet')
// const createColorDiv = document.createElement('div');


// elViolet.classList.add('product-details')
// elViolet.setAttribute("class", 'violet');

//
// createColorDiv.innerHTML = `
// <div id = "${elViolet}" className = "product-price" / div>
//    `

// document.documentElement.style.setProperty('product-price', '#DED3F1FF');
// console.log(elViolet)
// console.log(createColorDiv)

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
