const IMGMENU = document.querySelector(".button__menu")
const NAV = document.querySelector(".nav__default")
const NAVHIDDEN = document.querySelector(".nav__hidden")
const MAIN = document.querySelector("main")

console.log(IMGMENU)
console.log(NAV)
console.log(NAVHIDDEN)
console.log(MAIN)

IMGMENU.addEventListener("click", () => {
    NAV.classList.toggle("none")
    NAVHIDDEN.classList.toggle("block")
    MAIN.classList.toggle("main__nav-hidden")
})