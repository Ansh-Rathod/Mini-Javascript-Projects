const result = document.getElementById('coutDown')
let minutes = 10
let time = minutes * 60

function updateTime() {
    const minutesIn = Math.floor(time / 60)
    time--
    const seconds = time % 60
    result.innerHTML = `${minutesIn}:${seconds}`
}
setInterval(updateTime, 1000)