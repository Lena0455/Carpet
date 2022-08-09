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
const favoritesIconFilling = "icon-Vector-4-filling"
const cartIconFilling = "icon-Vector-5-filling"

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
             <a href=""  class="favorites item__social icon-img icon-one"><i class="${favoritesIconFilling}"></i></a>
           
            </div>
           <div class="icon-positions-cart">
             <a href="" id="cart" class="cart icon-img item__social icon-img icon-two"><i class="${cartIcon}"></i></a>
             <a href="" class="cart icon-img item__social icon-img icon-two"><i class="${cartIconFilling}"></i></a>
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

//
// const carts = [
//     {
//         art: 'HL-714-GREY',
//         thing: 10
//     },
//     {
//         art: 'HLY-7915-GREY',
//         thing: 7
//     },
//     {
//         art: 'H14-GREY',
//         thing: 6,
//     },
// ];
// console.log(carts)


// Представление корзины
// const id714 = 'HL-714-GREY'



// const getButton = document.querySelectorAll('.button-plus');
//
// getButton.forEach((element) => {
//     element.addEventListener("click", (event) => {
//
//        if(event.currentTarget.classList.contains("quantity-goods")) {
//            // console.log(event.target.dataset.id)
//            plusFunction(event.target.dataset.id)
//        }
//
//         // event.stopPropagation()
//     })
//
// })


const cart = {
    rty714: 10,
    uio14: 6,
    op7915: 7,
}
document.onclick = (event) => {
    // console.log(event.target.classList)
    if (event.target.classList.contains('.button-plus')) {
        console.log(event.target.dataset)
        // plusFunction(event.target.dataset.id)
    }
}

// let plusFunction = (id) =>  {
//     cart[id]++
// }

// console.log(getButton)
console.log(cart)
//увеличение количества товара
//уменьшение количества товара
//удаление количества
//отрисовка корзины









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
