console.log(document.documentElement)


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
        sale: false,
        title: "Маленький серый ковер",
        art: "HL-214-GR",
        discount: 0,
    },
    {
        image: "/Source/img/pexels-tatiana-syrikova-3932930.jpg",
        price: 117790,
        sale: false,
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

        // функция добавления товара в корзину по клику
        const cartButton = carpetCard.querySelector('.icon-cart')

        console.log(cartButton)
        cartButton.addEventListener('click', (event) => {
            // carpetCard.getElementsByClassName('.cart').addEventListener('click', (event) => {
            // carpetCard.querySelectorAll('.cart').addEventListener('click', (event) => {

            // переключение иконки тележка
            event.currentTarget.classList.toggle('icon-cart-f')
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
    const {image, price, sale, title, art, discount} = item //  объявление новых переменных и присваивание им значений на основе значений свойств объекта
    const starburst = "icon-starburst"
    // el
    carpetCreateDiv.innerHTML = `
        <img src="${image}" alt="carpet" class="img-block"/>

<div class="starburst-icon">${item.sale === true ? `<i class="${starburst}">` : ''}</i>
    <div class="sale-percent">${item.sale === true ? `${discount + ' ' + '&#x25'}` : ''}</div>
</div>
    <div class="icon-positions-favorites">
      <button class="favorites item__social icon-img icon-hov"><i class="icon-flag-f"></i></button>
      <button class="favorites item__social icon-img icon-hov"><i class='icon-flag'></i></button>  
    </div>
    
    <div class="icon-positions-cart">
       <button class="cart item__social icon-img icon-hov"><i class="icon-cart-f"></i></button>
       <button class="cart item__social icon-img icon-hov"><i class='icon-cart'></i></button>  
    </div>
<div class="product-details">
    <div class="product-price">
        <div class="price">${price + '' + '₽'}</div>
        <p class="rub"></p>
    </div>
</div>
`
    return carpetCreateDiv;
}

// переключение иконки флажок
const toggleFlag = document.querySelectorAll('.icon-flag');
console.log(toggleFlag);

toggleFlag.forEach((el) => {
    el.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('icon-flag-f')
        event.stopPropagation()
    })
})
// изменение цвета иконок доставки
// const inverseDelivery = document.querySelector('.')
// const inverseDelivery = document.querySelectorAll(".delivery-column > div")
// console.log(inverseDelivery)
//
// inverseDelivery.forEach((el) => {
//     el.addEventListener("click", (event) => {
//         event.currentTarget.classList.toggle("card-selected")
//         //classList.toggle //метод-переключатель - у элемента будет то добавляться, то убираться класс
//         // console.log(event.currentTarget); Объект к которому назначен обработчик
//         // toggle(event.currentTarget, "card-selected")
//         event.stopPropagation()
//     })
// })
//
// const inverseDeliveryIcon = document.querySelectorAll('.some-vector')
// console.log(inverseDeliveryIcon);
//
// // array1.forEach(element => console.log(element));
// // inverseDeliveryIcon.forEach(el => console.log(el));
//
// // forEach(callbackFn)
// inverseDeliveryIcon.forEach((elementInverse) => {
//     elementInverse.addEventListener('click', (event) => {
//         event.currentTarget.classList.toggle('delivery-white')
//         event.stopPropagation()
//     })
// })

// массив элементов данных доставки
const deliveryItems = [
    {
    },
]
const info = {
    priceForRuss: 1000,
    priceForSPb: 600,
    priceForFree: 'Бесплатно',
    priceForFloor: 100,
}

// Получение element of item
const deliveryGetEl = document.getElementById('wrapper'); // то куда будет все вкладываться

renderDelivery(deliveryGetEl, deliveryItems)
function renderDelivery (el, items) {

    items.forEach((item) => {

        const renderDiv = createDelivery(item)
        console.log(renderDiv)
        el.appendChild(renderDiv);
    })

}

function createDelivery(item) {

    const createDeliveryDiv = document.createElement('div');

    createDeliveryDiv.innerHTML = `<div class="wrapper">
    <div class="delivery">
        <div class="delivery-column">

            <div class="delivery-column-one">
                <div class="invert-text delivery-city ">Доставка по России
                </div>
                <button class="delivery-icon"><i class="icon-car-1"></i></button>
                <div class="product-price">
                <div class="ruble-symbol invert-text">${info.priceForRuss + '' + '₽'}</div>
                </div>
                <div class="floor"><p class="universal invert-text">Подъем на один этаж</p>${info.priceForFloor + '' + '₽'}</div>
            </div>
            <div class="delivery-column-two">
                <div class="delivery-city invert-text">Доставка по Петербургу</div>
                   <button class="delivery-icon invert-text"><i class="icon-car-2"></i></button>
                <div class="product-price">
                <div class="ruble-symbol invert-text">${info.priceForSPb + '' + '₽'}</div>
                </div>
                <div class="floor"><p class="universal invert-text">Подъем на один этаж</p>${info.priceForFloor + '' + '₽'}</div>
            </div>
            <div class="delivery-column-three">
                <div class="delivery-city invert-text">Самовывоз</div>
        <button class="delivery-icon invert-text"><i class="icon-shop"></i></button>
                <div class="floor-free">
                     <div class="product-price">
                <div class="ruble-symbol invert-text">${info.priceForFree}</div>
                </div>
                    <a href="" class="universal-link invert-text">Показать на карте</a>
                </div>
            </div>
        </div>
    </div>`

    return createDeliveryDiv
}

// изменение цвета иконок доставки
const inverseDelivery = document.querySelectorAll(".delivery-column > div")
inverseDelivery.forEach((el) => {
    el.addEventListener("click", (event) => {
        event.currentTarget.classList.toggle("card-selected")
        //classList.toggle //метод-переключатель - у элемента будет то добавляться, то убираться класс
        // console.log(event.currentTarget); Объект к которому назначен обработчик
        // toggle(event.currentTarget, "card-selected")
        event.stopPropagation()
    })
})

// const inverseDelivery = document.querySelector('.')
// array1.forEach(element => console.log(element));
// forEach(callbackFn)


