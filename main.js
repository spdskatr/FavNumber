const palette = ["111889", "d7d88d", "17f17a", "79c1c2", "21a704", "d98000", "000000"]
var flashing = false;

function rave() {
    if (!flashing) {
        flashing = true
        setInterval(changeNumberColor, 200)
    }
}

function changeNumberColor() {
    let numbers = document.getElementsByClassName("mynumber")
    let color = palette[Math.floor(Math.random() * palette.length)];
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].style.color = "#" + color
    }
}