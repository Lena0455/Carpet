const basket = JSON.parse(localStorage.getItem("basket"));

// вызов функции рендера корзины покупателя
function renderBasket(el, items) {
    items.forEach((item) => {
        // функция должна рисовать корзину покупателя но основе массива cart
        // перебрать массив cart, это даст поштучный вывод item по нажатию на иконку
        const carpetBasket = createBasketHTMLElement(item)

        el.appendChild(carpetBasket)
        console.log(carpetBasket) // элемет находит
    })
}

// функция создания HTML элемента Basket

function createBasketHTMLElement(item) {
    const basketCreateDiv = document.createElement('div');

    console.log("create basket item: ", item)
    // деструктуризация объектов item
    const {image, price, sale, title, art} = item
    // el
    basketCreateDiv.innerHTML = `
<div class="choice-order-wrap">
    <div class="choice-order">
        <div class="product-card-choice">
              <img src="${image}" alt="carpet" class="preview"/>
        </div>
        <div class="about-item">
            <div>
                <h5 class="title">${title}</h5>
            </div>
            <div class="include">
                <div class="art-wrap">
                    <p class="art-name">Артикул:</p>
                    <p class="art">${art}</p>
                </div>
                <div class="product-put">
                    <div class="sum">
                        <div class="description-sum">Цена:</div>
                        <div class="description-price">${price}</div>
                        <div class="description-discount-price">${getDiscount(item)}</div>
                        <p class="description-ru">₽</p>
                    </div>

                    <div class="goods">
                        <div class="quantity-goods">
                            <button class="button-minus">-</button>
                            <input type="text" min="1" max="9" class="numb" placeholder="1">
                            <button class="button-plus">+</button>
                        </div>
                        <div class="bin"><img class="icon" src="/Source/icons/Trash Can.svg" alt="bin"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`

    console.log(basketCreateDiv) // создает
    return basketCreateDiv;
}

const basketElement = document.getElementById("basket")
renderBasket(basketElement, basket)

console.log("card js loaded")
console.log(basket) // массив корзины


// let totalCost; // вся стоимость покупки без скидки
// let discount; // сумма скидки
// let discountAndCost; // итоговая сумма с учетом скидки

// функция подсчета суммы всей стоимости покупки без скидки
// reduce используется для вычисления какого-нибудь единого значения на основе всего массива.
// arr = [1, 2, 3]
// let allCost = arr.reduce((sum, current) => sum + current, 0);

let totalCost = basket.reduce((sum, current) => sum + current.price, 0);
console.log(totalCost)

// carpetItems.forEach(o => console.log(o));
// carpetItems.forEach(item => console.log(item));

basket.forEach(item => console.log(item.discount)) // ищет все скидки в массиве basket

let percent = basket.find(item => item.discount > 0) // ищет первую скидку в массиве basket
console.log(percent.discount);

let discount = totalCost / 100 * percent.discount;
let discountAndCost = totalCost - discount;
// console.log(discount + '%');


// Как должно: price отображается полностью. Если sale true,
//     то дополнительно отоброжается discount, а price пересчитывается с учетом скидки
// Как есть: скидка увеличина на 10%
// Нужно: price разделить на 100 и умножить но процент скидки, далее из price минус discount


// отрисовка вывода сумм
const getSumElem = document.getElementById('sum')
getSumElem.innerHTML = `<div class="choice-order-wrap">
    <div class="sum-left">
        <div class="description-row-cont">
            <div class="description-row">
                <div class="union">
                    <p class="conclusion">Всего:<span>${totalCost}</span>₽</p></p>
                </div>
            </div>
            <div class="description-row">
                <div class="union">
                    <p class="conclusion">Скидка составила:<span>${getTotalDiscount()}</span>₽</p>
                </div>
            </div>
        </div>
    </div>
    <div class="sum">
        <div class="description-sum">Итого:</div>
        <div class="description-price">${discountAndCost}</div>
        <p class="description-ru">₽</p>
        <button type="button" class="success">Перейти к оформлению</button>
    </div>

</div>`

function getTotalDiscount() {
    return basket.reduce((sum, cur) => {
        sum + (cur.price / 100) * item.discount;
    }, 0)
}

function getDiscount(item) {
    return item.price - (item.price / 100) * item.discount;
}