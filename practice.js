//DOM - document - it's a global variable that is provided by the browser and allows you to connect
// the html with javascript
//Functions
//Variables/types

// const title = document.getElementById("h1")
// const colorChange = document.getElementById("color-change")
// const sizeChange = document.getElementById("size-change")
// const changeBtn = document.getElementById("btn")

// const changeFunc = () => {
//     title.style.color = colorChange.value
//     title.style.fontSize = sizeChange.value + "px"
// }

// changeBtn.addEventListener("click", changeFunc)


// const title = document.getElementById("h1")
// const colorChange = document.getElementById("color-change")
// const sizeChange = document.getElementById("size-change")
// const changeBtn = document.getElementById("btn")

// const colorChangeFunc = () => {
//     title.style.color = colorChange.value
// }

// const sizeChangeFunc = () => {
//     title.style.fontSize = sizeChange.value + "px"
// }

// const onClickCallbackFunction = () => {
//     colorChangeFunc()
//     sizeChangeFunc()
// }

// changeBtn.addEventListener("click", onClickCallbackFunction)














const container = document.getElementById("container")

// console.log(container.children[0].childNodes[0].data)

const bodyStructure = document.getElementsByTagName("body")

const accessH1 = document.getElementById("access-h1")
//getElementById is considered a browser api

const btn = document.getElementById("btn")

const h1Func = () => {
    accessH1.style.color = "red"
    accessH1.style.padding = "20px"
    accessH1.style.backgroundColor ="green"    
}

btn.addEventListener("click", h1Func)


// console.log(accessH1.style) 

//style on line 14 can be considered a browser api because you're accessing the css with the js file

// console.log(accessH1.textContent)

// console.log(accessH1.childNodes)