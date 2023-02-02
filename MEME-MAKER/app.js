const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 800;
canvas.height = 800;

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

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

ctx.lineWidth = lineWidth.value
ctx.lineCap = "round"

const lineWidth = document.getElementById("line-width")
const color = document.getElementById("color")
const colorOptions = Array.from(document.getElementsByClassName("color-option"))
const modeBtn = document.getElementById("mode-btn")
const destroyBtn = document.getElementById("destroy-btn")
const eraserBtn = document.getElementById("eraser-btn")
const fileInput = document.getElementById("file")
const textInput = document.getElementById("text")
const saveBtn = document.getElementById("save")


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

function onMove(e) {
    if (isPainting){
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()
        return
    }
    ctx.moveTo(e.offsetX, e.offsetY)
}

function startPainting(){
    isPainting = true
}

function cancelPainting() {
    isPainting = false
    ctx.beginPath()
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
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    }
}

function onDestroyClick() {
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

}

function onEraserClick() {
    ctx.strokeStyle = "white"
    isFilling = false
    modeBtn.innerText = "Fill"

}

function onFileChange(e){
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)
    const image = new Image()
    image.src = url
    image.onload = function () {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        fileInput.value = null
    }
}

function onDoubleClick(e){
    const text = textInput.value
    if (text !== ""){
        ctx.save()
        ctx.lineWidth = 1
        ctx.font = "48px sans-serif"
        ctx.fillText(text, e.offsetX, e.offsetY)
        ctx.restore()
    }
}

function onSaveClick() {
    const url = canvas.toDataURL()
    const a = document.createElement("a")
    a.href = url
    a.download = "myDrawing.png"
    a.click()
}

canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", cancelPainting)
canvas.addEventListener("mouseleave", cancelPainting)
canvas.addEventListener("click", onCanvasClick)
canvas.addEventListener("dblclick", onDoubleClick)

lineWidth.addEventListener("change", onLineWidthChanges)
color.addEventListener("change", onColorChange)
colorOptions.forEach((color) => color.addEventListener("click", onColorClick))

modeBtn.addEventListener("click", onModeClick)
destroyBtn.addEventListener("click", onDestroyClick)
eraserBtn.addEventListener("click", onEraserClick)
fileInput.addEventListener("change", onFileChange)
saveBtn.addEventListener("click", onSaveClick)