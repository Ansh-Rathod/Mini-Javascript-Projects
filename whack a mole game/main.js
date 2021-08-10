const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
let result = 0
let currentTime = timeLeft.textContent

function randomSqure() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')
    hitPosition = randomPosition.id

}
square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id == hitPosition) {
            result = result + 1
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSqure, 500)
}
moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime === 0) {
        clearInterval(timerId)
        alert("game over your score is " + result)
    }
}
let timerId = setInterval(countDown, 1000)