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
    basketCreateDiv.innerHTML = `<div class="choice-order-wrap">
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
</div>
`
    console.log(basketCreateDiv) // создает
    return basketCreateDiv;
}

const basketElement = document.getElementById("basket")
renderBasket(basketElement, basket)

console.log("card js loaded")