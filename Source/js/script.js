console.log(document.documentElement)

// const inverseDelivery = document.querySelector('.')
// к массиву не добавить слушатель
// delieveryIconInverted!
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
// Представление карточек (items)
const carpetItems = [
    {
        // (item)
        image: "/Source/img/uzbek-carpet-chivacarpet-237beige-brown-1-410x410.jpg",
        price: 9790,
        sale: true,
        title: "Ковер c золотым орнаментом",
        art: "HL-714-ZOL",
        discount: 5,
    },
    {
        image: "/Source/img/pexels-max-vakhtbovych-6890403.jpg",
        price: 8790,
        sale: false,
        title: "Ковер выставочный",
        art: "HL-714-IND",
        discount: 0,
    },
    {
        image: "/Source/img/turkish-carpet-opera-5828ecream-grey-oval-1-410x410.jpg",
        price: 17790,
        sale: true,
        title: "Маленький серый ковер",
        art: "HL-214-GR",
        discount: 0,
    },
    {
        image: "/Source/img/pexels-tatiana-syrikova-3932930.jpg",
        price: 117790,
        sale: true,
        title: "Белая шкура",
        art: "HL-714-IND",
        discount: 0,
    },
    {
        image: "/Source/img/turkish-carpet-vista-a068agrey-brown-1-410x410.jpg",
        price: 790,
        sale: true,
        title: "Ковер с геометрическим рисунком",
        art: "HL-719-KON",
        discount: 2,
    },
]
// Получить данные из объектов массива возможно только перебором этого массива
// carpetItems.forEach(o => console.log(o));
carpetItems.forEach(item => console.log(item));

// Переменные для иконок favorites и cart
const favoritesIcon = "icon-Vector-4"
const cartIcon = "icon-Vector-5"
const favoritesIconFilling = "icon-Vector-4-filling"
const cartIconFilling = "icon-Vector-5-filling"

// Представление корзины ввиде массива
// Сюда по клику попадает объект, осюда же берутся данные для отрисовки карзины пользователя
localStorage.setItem("basket", "[]")
const basket = [];

// const carpetsGetElements = document.querySelectorAll('.product-card') // returns an array [el, el, el]
// function renderCarpets(el, items) {
//     items.forEach((item, i) => {
//         const carpetCard = createCarpetHTMLElement(item);
//         const col = i % 3;
//         el[col].appendChild(carpetCard);
//     })
// }
// const carpetsGetEl = document.querySelector('.product-card'); // returns an HTMLElement

// Получение element of item
const carpetsGetEl = document.getElementById('card-container');
console.log(carpetsGetEl); // div#card-container.grid-container-card

// вызов функции рендера карточек
renderCarpets(carpetsGetEl, carpetItems)

function renderCarpets(el, items) {
    items.forEach((item) => {
        const carpetCard = createCarpetHTMLElement(item);
        console.log(carpetCard)

        // const cartButton = carpetCard.getElementById('cart') // не ищет // carpetCard.getElementById is not a function
        // const cartButton = carpetCard.querySelector('button.cart') // не ищет
        // const cartButton = carpetCard.querySelector('img.img-block') // ищет

        // функция добавления товара в корзину по клику
        const cartButton = carpetCard.querySelector('i.icon-Vector-5-filling')
        // console.log(cartButton)
        cartButton.addEventListener('click', (event) => {
            // carpetCard.getElementsByClassName('.cart').addEventListener('click', (event) => {
            // carpetCard.querySelectorAll('.cart').addEventListener('click', (event) => {
            basket.push(item);
            localStorage.setItem("basket", JSON.stringify(basket));
            console.log(basket)
        })
        el.appendChild(carpetCard);
    })
}

// функция создания HTML элемента Carpet
function createCarpetHTMLElement(item) {
    const carpetCreateDiv = document.createElement('div');

    // деструктуризация объектов item
    //  const image = item.image;
    const {image, price, sale, title, art, discount} = item //  объявление новых переменных и присваивание им значений
    //  на основе значений свойств объекта
    // console.log(price);
    // console.log(item);

    // el
    carpetCreateDiv.innerHTML = `
        <img src="${image}" alt="carpet" class="img-block"/>
           <div class="icon-positions-favorites">
             <button class="favorites item__social icon-img icon-hov"><i class="${favoritesIcon}"></i></button>
             <a href="https://learn.javascript.ru/destructuring-assignment"
               <button class="favorites item__social icon-img icon-hov"><i class="${favoritesIconFilling}"></i></button>
             </a>

            
           <div class="icon-positions-cart">
            <button class="cart item__social icon-img icon-hov"><i class="${cartIcon}"></i></button>  
<!--              <a href="/cart.html"-->
                <button class="cart item__social icon-img icon-hov"><i class="${cartIconFilling}"></i></button>
<!--              </a>-->
           
           </div>
        </div>

        <div class="product-details">
          <div class="product-price"> 
            <div class="price">${price}</div><p class="rub">₽</p>
            <span-decoration>${discount}</span-decoration>
             <span-decoration>
                 <p class="rub">₽</p>
               </span-decoration>
          </div>
        </div>`
    return carpetCreateDiv;
}
