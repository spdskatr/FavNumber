const palette = ["111889", "d7d88d", "17f17a", /*"79c1c2", This is the colour of the background */ "21a704", "d98000"]

function changeNumberColor() {
    document.getElementById("thenumber").setAttribute("style", "color: #" + palette[Math.floor(Math.random() * palette.length)])
}