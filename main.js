let circle1 = document.querySelector(".circle1")
let circle2 = document.querySelector(".circle2")
let circle3 = document.querySelector(".circle3")

let cooldown1 = false
let cooldown2 = false
let cooldown3 = false

setInterval (() => {
let numAleatorio = Math.floor(Math.random() * 10)
console.log(numAleatorio)
if (numAleatorio == 1 && !circle2.classList.contains("ativo") && !circle3.classList.contains("ativo") && cooldown1 == false) {
    circle1.classList.add("ativo")
}
if (numAleatorio == 2 && !circle1.classList.contains("ativo") && !circle3.classList.contains("ativo") && cooldown2 == false) {
    circle2.classList.add("ativo")
}
if (numAleatorio == 3 && !circle2.classList.contains("ativo") && !circle1.classList.contains("ativo") && cooldown3 == false) {
    circle3.classList.add("ativo")
}
}, 1000)

document.addEventListener("keydown", function(e) {
if (e.key == "g" && circle1.classList.contains("ativo")) {
        circle1.classList.remove("ativo")
        cooldown1 = true
        setTimeout (() => {
            cooldown1 = false
        }, 2000)
}    
if(e.key == "h" && circle2.classList.contains("ativo")) {
        circle2.classList.remove("ativo")
        cooldown2 = true
        setTimeout (() => {
            cooldown2 = false
        }, 2000)
}
if(e.key == "j" && circle3.classList.contains("ativo")) {
        circle3.classList.remove("ativo")
        cooldown3 = true
        setTimeout (() => {
            cooldown3 = false
        }, 2000)
}
})
