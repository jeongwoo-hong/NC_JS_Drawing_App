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

ctx.fillRect(200, 200, 50, 200)
ctx.fillRect(400, 200, 50, 200)
ctx.lineWidth = 2;
ctx.strokeRect(300, 300, 50, 100)
ctx.fillRect(200, 200, 200, 20)