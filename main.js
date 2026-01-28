setInterval (() => {
let numAleatorio = Math.floor(Math.random() * 10)
if (numAleatorio == 1) {
    circle1.style.backgroundColor = "Green"
}
}, 1000)
let circle1 = document.querySelector(".circle1")
let circle2 = document.querySelector(".circle2")
let circle3 = document.querySelector(".circle3")

