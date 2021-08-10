const body = document.body

function createSnow() {
    const facebook = document.createElement('i')
    facebook.classList.add('fa-facebook')
    facebook.classList.add('fab')

    facebook.style.left = Math.random() * window.innerWidth + 'px'
    facebook.style.animationDuration = Math.random() * 3 + 2 + 's'
    facebook.style.opacity = Math.random()
    facebook.style.fontSize = Math.random() * 16 + 10 + 'px'
    body.appendChild(facebook)
    setTimeout(() => {
        facebook.remove()
    }, 3000)
}
createSnow()
setInterval(createSnow, 100)

function insta() {
    const instagram = document.createElement('i')
    instagram.classList.add('fa-instagram')
    instagram.classList.add('fab')

    instagram.style.left = Math.random() * window.innerWidth + 'px'
    instagram.style.animationDuration = Math.random() * 3 + 2 + 's'
    instagram.style.opacity = Math.random()
    instagram.style.fontSize = Math.random() * 16 + 10 + 'px'
    body.appendChild(instagram)
    setTimeout(() => {
        instagram.remove()
    }, 3000)
}
insta()
setInterval(insta, 100)



function twit() {
    const twitter = document.createElement('i')
    twitter.classList.add('fa-twitter')
    twitter.classList.add('fab')

    twitter.style.left = Math.random() * window.innerWidth + 'px'
    twitter.style.animationDuration = Math.random() * 3 + 2 + 's'
    twitter.style.opacity = Math.random()
    twitter.style.fontSize = Math.random() * 16 + 10 + 'px'
    body.appendChild(twitter)
    setTimeout(() => {
        twitter.remove()
    }, 3000)
}
twit()
setInterval(twit, 100)



function what() {
    const whatsapp = document.createElement('i')
    whatsapp.classList.add('fa-whatsapp')
    whatsapp.classList.add('fab')

    whatsapp.style.left = Math.random() * window.innerWidth + 'px'
    whatsapp.style.animationDuration = Math.random() * 3 + 2 + 's'
    whatsapp.style.opacity = Math.random()
    whatsapp.style.fontSize = Math.random() * 16 + 10 + 'px'
    body.appendChild(whatsapp)
    setTimeout(() => {
        whatsapp.remove()
    }, 3000)
}
what()
setInterval(what, 100)