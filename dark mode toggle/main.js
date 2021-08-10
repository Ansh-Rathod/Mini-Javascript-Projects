const toggle = document.getElementById('toggle')
const body = document.body


toggle.addEventListener('change', (e) => {
    body.classList.toggle('dark', e.target.checked)
})