const text = 'Hello, I\'m Ansh Learning javascript from Travercy Media Youtube channel.'
let index = 0
const body = document.body

function createIndex() {
    body.innerHTML = text.slice(0, index)
    index++
    if (index > text.length) {
        index = 0
    }
}
setInterval(createIndex, 100)