
// createBasketHTMLElement() // 1. Забыла аргумент ф-ии 2. не используешь возращаемое значение


// let retEl = () => {
//     return [carpetCreateDiv, basketCreateDiv]
// }
// console.log(retEl()[1])


// функция суммирования товаров
// redyce
//
// .innerHTML = `<div class="choice-order-wrap">
//     <div class="sum-left">
//         <div class="description-row-cont">
//             <div class="description-row">
//                 <div class="union">
//                     <p class="conclusion">Всего:<span> 209 800</span>₽</p></p>
//
//                 </div>
//             </div>
//             <div class="description-row">
//                 <div class="union">
//                     <p class="conclusion">Скидка составила:<span>- 9 800</span>₽</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div class="sum">
//         <div class="description-sum">Итого:</div>
//         <div class="description-price">200 000</div>
//         <p class="description-ru">₽</p>
//         <button type="button" class="success">Оформить доставку</button>
//     </div>
// </div>`

// Представление корзины
// const cart = {
//     'HL-714-IND' : {
//         art: 'HL-714-IND',
//         name: 'Индийский прямоугольный ковёр',
//         image: "/Source/img/pexels-max-vakhtbovych-7018250.jpg",
//         count: 2,
//         price: 9000
//     },
//     'H14-LIT' : {
//         art: 'H14-LIT',
//         name: 'Маленкий коврик',
//         image: "/Source/img/turkish-carpet-opera-5828ecream-grey-oval-1-410x410.jpg",
//         count: 3,
//         price: 800
//     },
//     'HLY-7915-WOLF' : {
//         art: 'HLY-7915-WOLF',
//         name: 'Белая волчья шкура',
//         image: "/Source/img/pexels-tatiana-syrikova-3932930.jpg",
//         count: 4,
//         price: 200000
//     },
// };


// массив вместо объектов
// const cart = [
// {
//     art: 'HL-714-IND',
//     name: 'Индийский прямоугольный ковёр',
//     image: "/Source/img/pexels-max-vakhtbovych-7018250.jpg",
//     count: 2,
//     price: 9000
// },
// {
//     art: 'H14-LIT',
//     name: 'Маленкий коврик',
//     image: "/Source/img/turkish-carpet-opera-5828ecream-grey-oval-1-410x410.jpg",
//     count: 3,
//     price: 800
// },
// {
//     art: 'HLY-7915-WOLF',
//     name: 'Белая волчья шкура',
//     image: "/Source/img/pexels-tatiana-syrikova-3932930.jpg",
//     count: 4,
//     price: 200000
// },
// ];

// пример для добавления нового товара в корзину.
// cart.push(carpetItem)

// const getButtonPlus = document.querySelectorAll('.button-plus');
// const getButtonMinus = document.querySelectorAll('.button-minus');
//
// getButtonPlus.forEach((elementPlus) => {
//     elementPlus.addEventListener("click", (eventPlus) => {
//
//         if (eventPlus.currentTarget.classList.contains("button-plus")) {
//             plusFunction(eventPlus.target.dataset.id)
//
//         }
//         // event.stopPropagation()
//     })
// })
//
// //увеличение количества товара
// const plusFunction = (id) => {
//     cart[id]['count']++
//     renderCart()
// }
// getButtonMinus.forEach((elementMinus) => {
//     elementMinus.addEventListener("click", (eventMinus) => {
//
//         if (eventMinus.currentTarget.classList.contains("button-minus")) {
//             minusFunction(eventMinus.target.dataset.id)
//         }
//         // event.stopPropagation()
//     })
// })
//
// //уменьшение количества товара
// const minusFunction = (id) => {
//     if (cart[id]['count'] - 1 === 0) {
//         deleteFunction(id)
//         return true
//     }
//     cart[id]['count']--
//     renderCart()
// }
// //удаление количества
// const deleteFunction = (id) => {
//     delete cart[id]
//     renderCart()
// }
// //отрисовка корзины
// const renderCart = () => {
//     console.log(cart)
//
//
// }

// renderCart()

// через onclick
// document.onclick = (event) => {
//     if (event.target.classList.contains('button-plus' && "button-minus")) {
//         console.log(event.target.dataset)
//         // plusFunction(event.target.dataset.id)
//         console.log(event.target.classList)
//     }
// }

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