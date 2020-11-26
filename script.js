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
