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
const keyboardKeys = [
    [
        {label: "1", code: "Digit1"},
        {label: "2", code: "Digit2"},
        {label: "3", code: "Digit3"},
        {label: "4", code: "Digit4"},
        {label: "5", code: "Digit5"},
        {label: "6", code: "Digit6"},
        {label: "7", code: "Digit7"},
        {label: "8", code: "Digit8"},
        {label: "9", code: "Digit9"},
        {label: "0", code: "Digit0"}
    ],
    [
        {label: "Q", code: "KeyQ"},
        {label: "W", code: "KeyW"},
        {label: "E", code: "KeyE"},
        {label: "R", code: "KeyR"},
        {label: "T", code: "KeyT"},
        {label: "Y", code: "KeyY"},
        {label: "U", code: "KeyU"},
        {label: "I", code: "KeyI"},
        {label: "O", code: "KeyO"},
        {label: "P", code: "KeyP"}
    ],
    [
        {label: "A", code: "KeyA"},
        {label: "S", code: "KeyS"},
        {label: "D", code: "KeyD"},
        {label: "F", code: "KeyF"},
        {label: "G", code: "KeyG"},
        {label: "H", code: "KeyH"},
        {label: "J", code: "KeyJ"},
        {label: "K", code: "KeyK"},
        {label: "L", code: "KeyL"},
        {label: "Ç", code: "Semicolon"}
    ],
    [
        {label: "Z", code: "KeyZ"},
        {label: "X", code: "KeyX"},
        {label: "C", code: "KeyC"},
        {label: "V", code: "KeyV"},
        {label: "B", code: "KeyB"},
        {label: "N", code: "KeyN"},
        {label: "M", code: "KeyM"}
    ]
]

const keyboard = document.querySelector(".keyboard")
let i = 0

keyboardKeys.forEach(row => {
    const rowDiv = document.createElement("div")
    rowDiv.classList.add("row")
    if(i == keyboardKeys.length - 1) {
        rowDiv.classList.add("last")
    }
    i++
    row.forEach(keyData => {
        const keyDiv = document.createElement("div")
        keyDiv.classList.add("key")
        keyDiv.textContent = keyData.label
        keyDiv.dataset.code = keyData.code
        rowDiv.appendChild(keyDiv)
    })
    keyboard.appendChild(rowDiv)
})
