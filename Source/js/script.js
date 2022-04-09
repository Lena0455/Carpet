// const e = document.querySelector()
const e = document.querySelectorAll(".delivery-column > div")

console.log(e)

// function toggle(el, classname) {
//     if (el.classList.contains(classname)) {
//         el.classList.remove(classname)
//     } else {
//         el.classList.add(classname)
//     }
// }

e.forEach((el) => {
    el.addEventListener("click", (event) => {
        event.currentTarget.classList.toggle("card-selected")
        // toggle(event.currentTarget, "card-selected")
        event.stopPropagation()
    })
})



// let a = [1, 2, 3, "vasiliy", true, 2003]
