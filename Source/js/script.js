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
