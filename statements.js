var mouseEvent = "empty"

canvas = document.getElementById("myCanva")
ctx = canvas.getContext("2d")

var color = document.getElementById("input_colour")
var width_line = document.getElementById("input_width")
var radius = document.getElementById("input_radius")

canvas.addEventListener("mousedown",my_mousedown)

function my_mousedown(e) {
    color = document.getElementById("input_colour").value
    radius = document.getElementById("input_radius").value
    width_line = document.getElementById("input_width").value
    mouseEvent = "mouseDown"
}


canvas.addEventListener("mouseup",my_mouseup)

function my_mouseup(e) {
    mouseEvent = "mouseup"
}


canvas.addEventListener("mouseleave",my_mouseleave)

function my_mouseleave(e) {
    mouseEvent = "mouseleave"
}


canvas.addEventListener("mousemove",my_mousemove)

function my_mousemove(e) {
    current_position_x = e.clientX - offsetLeft
    current_position_y = e.clientY - offsetTop

    if (mouseEvent == "mouseDown") {
        console.log("current position of x and y coordinates = ")
        console.log("x = " + current_position_x + "y = " + current_position_y)
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width_line
        ctx.arc(current_position_x, current_position_y, radius, 0, 2 * Math.PI)
        ctx.stroke()
    }
}