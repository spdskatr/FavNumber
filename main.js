const palette = ["111889", "d7d88d", "17f17a", "79c1c2", "21a704", "d98000", "000000"]
var flashing = false;
var four = 0;
document.addEventListener("keydown", ev => {
    if (ev.key == '4') {
        four++;
        document.getElementById("four").innerHTML += "4"
        if (four == 8) {
            window.location.href = "http://battlefordreamisland.wikia.com/wiki/Four"
        }
    }
})


function rave() {
    if (!flashing) {
        flashing = true
        setInterval(changeNumberColor, 200)
    }
}

function changeNumberColor() {
    let numbers = document.getElementsByClassName("mynumber")
    let color = palette[Math.floor(Math.random() * palette.length)]
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].style.color = "#" + color
    }
}