const changeBtn = document.getElementById('changeBg')
const body = document.body
const text = document.getElementById('text')
changeBtn.addEventListener('click', randomBg)

function randomBg() {
    const color1 = getRandombg()
    const color2 = getRandombg()
    const color3 = getRandombg()
    const colorString = `rgb(${color1},${color2},${color3})`
    body.style.backgroundColor = colorString
    text.innerHTML = colorString
}

function getRandombg() {
    return Math.floor(Math.random() * 255)
}