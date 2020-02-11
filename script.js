function makeHeader(title) {
    const header = document.createElement("h1")
    header.innerHTML = title
    return header
}

document.body.append(makeHeader("JavaScript Workshop"))

for (let i = 0; i < 5; i++) {
    const image = document.createElement("img")
    image.setAttribute("src", "assets/" + i + ".jpg")
    document.body.append(image)
}

let i = 0
function printNumber() {
    i++
    console.log(i)
}

setInterval(printNumber, 1000)
