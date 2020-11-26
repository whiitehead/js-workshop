
console.log("hello")

let four = 4

four = 3

console.log(four)

const TRUE = true

function addFour(n) {
    const newNum = n + 4
    return newNum
}

((n) => {
    const newNum = n + 4
    return newNum
})(1)

addFour(1)

const obj = {
    name: "caleb",
    occ: "student"
}

let n = 0;

const inc = (n) => {
    return n + 1;
}

const printNum = () => {
    console.log(n)
    n++
}

setInterval(() => {
    console.log(n)
    n++
}, 500)

const arr = [
    1,
    2,
    3,
    "other thing"
]

const images = document.querySelectorAll("img")

for (let i = 0; i < images.length; i++) {
    images[i].onmouseenter = () => {
        images[i].style.transform = "rotate(90deg)"
    }
}

// <h1>JavaScript Workshop</h1>

const makeHeader = (title) => {
    const header = document.createElement("h1")
    header.innerText = title
    document.body.append(header)
}

makeHeader("JavaScript Workshop")

const image = document.createElement("img")
image.src = "assets/0.jpg"
image.alt = "a big 0"
document.body.append(image)

// for (let i = 0; i < 5; i++) {
//     const path = ""
// }
