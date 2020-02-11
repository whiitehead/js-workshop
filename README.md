# Installing VSCode

Get VisualStudio Code from [here.](https://code.visualstudio.com/Download "vscode")

# Installing NodeJS

## Ubuntu

Run these three lines in your terminal.

```sh
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs
```

## Windows and Mac

Get NodeJS from [here.](https://nodejs.org/en/download/)

# Developer Tools

| Browser | Console  | Inspector |
| :------ | :------: | :-------: |
| 🔥🦊    | Ctrl + K | Ctrl + C  |
| Chrome  | Ctrl + J | Ctrl + C  |

# JavaScript Basics

## Variables

If are not going to initialize again (use this most of the time)

```js
const four = 4
```

If you are going to initialize again

```js
let four = 4
```

## Control

```js
if (four == 4) {
  console.log("is four")
} else {
  console.log("is not four")
}
```

## Loops

Regular for loops

```js
for (let i = 0; i < 4; i++) {
  console.log(i)
}
```

While loop

```js
let i = 0
while (i < 4) {
  console.log(i)
  i++
}
```

## Functions

Regular functions

```js
function addFour(n) {
  return n + 4
}
```

New stateless functions

```js
const addFour = (n) => {
  return n + 4
}
```

or

```js
const addFour = n => n + 4
```

