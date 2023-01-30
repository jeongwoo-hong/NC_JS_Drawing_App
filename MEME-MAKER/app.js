const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 800;
canvas.height = 800;

// ctx.rect(50, 50, 100, 100)
// ctx.rect(150, 150, 100, 100)
// ctx.rect(250, 250, 100, 100)
// ctx.fill()

// ctx.beginPath()
// ctx.rect(350, 350, 100, 100)
// ctx.fillStyle = "red";
// setTimeout(() => {
//     ctx.fill()
// }, 5000);

// ctx.rect(50, 50, 100, 100)
// ctx.fillStyle = "red"
// setTimeout(() => {
//     ctx.fill()
// }, 1000);
// ctx.beginPath()

// ctx.rect(150, 150, 100, 100)
// ctx.fillStyle = "orange"
// setTimeout(() => {
//     ctx.fill()
// }, 2000);

// ctx.rect(50, 50, 100, 100)


// ctx.moveTo(50, 50)
// ctx.lineTo(150, 50)
// ctx.lineTo(150, 150)
// ctx.lineTo(50, 150)
// ctx.stroke()

// draw house
// ctx.fillRect(200, 200, 50, 200)
// ctx.fillRect(400, 200, 50, 200)
// ctx.fillRect(300, 300, 50, 100)
// ctx.fillRect(200, 200, 200, 20)
// ctx.moveTo(200, 200)
// ctx.lineTo(325, 100)
// ctx.lineTo(450, 200)
// ctx.fill()

// draw body
// ctx.fillRect(210 - 40, 200 - 20, 15, 100)
// ctx.fillRect(350 - 40, 200 - 20, 15, 100)
// ctx.fillRect(260 - 40, 200 - 20, 60, 200)
// ctx.arc(250, 100, 50, 0, 2 * Math.PI)
// ctx.fill()
// ctx.beginPath()
// ctx.fillStyle = "red"
// ctx.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI)
// ctx.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI)
// ctx.fill()

const lineWidth = document.getElementById("line-width")
ctx.lineWidth = lineWidth.value
const color = document.getElementById("color")
const colorOptions = Array.from(document.getElementsByClassName("color-option"))
const modeBtn = document.getElementById("mode-btn")
const destroyBtn = document.getElementById("destroy-btn")


// const colors = [
//     "#ff3838",
//     "#ffb8b8",
//     "#c56cf0"
// ]


// function onClick(event) {
//     ctx.beginPath()
//     ctx.moveTo(0, 0)
//     const color = colors[Math.floor(Math.random() * colors.length)]
//     ctx.strokeStyle = color
//     ctx.lineTo(event.offsetX, event.offsetY)
//     ctx.stroke()
// }

// canvas.addEventListener("click", onClick)



let isFilling = false
let isPainting = false

function onMove(event) {
    if (isPainting){
        ctx.lineTo(event.offsetX, event.offsetY)
        ctx.stroke()
        return
    }
    ctx.beginPath()
    ctx.moveTo(event.offsetX, event.offsetY)
}

function startPainting(){
    isPainting = true
}

function cancelPainting() {
    isPainting = false
}

function onLineWidthChanges(e) {
    ctx.lineWidth = e.target.value
}

function onColorChange(e){
    ctx.strokeStyle = e.target.value
    ctx.fillStyle = e.target.value
}

function onColorClick(e){
    const colorValue = e.target.dataset.color
    ctx.strokeStyle = colorValue
    ctx.fillStyle = colorValue
    color.value = colorValue
}

function onModeClick() {
    if(isFilling){
        isFilling = false
        modeBtn.innerText = "Fill"
    } else {
        isFilling = true
        modeBtn.innerText = "Draw"
    }
}

function onCanvasClick() {
    if(isFilling){
        ctx.fillRect(0, 0, 800, 800)
    }
}

function onDestroyClick() {
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 800, 800)

}

canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", cancelPainting)
canvas.addEventListener("mouseleave", cancelPainting)
canvas.addEventListener("click", onCanvasClick)

lineWidth.addEventListener("change", onLineWidthChanges)
color.addEventListener("change", onColorChange)
colorOptions.forEach(color => color.addEventListener("click", onColorClick))

modeBtn.addEventListener("click", onModeClick)
destroyBtn.addEventListener("click", onDestroyClick)