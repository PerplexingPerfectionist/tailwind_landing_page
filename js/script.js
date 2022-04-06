/* Mobile Menu */
const button = document.getElementById('menu-btn')
const navi = document.getElementById('menu')

button.addEventListener('click', () => {
    button.classList.toggle('open')
    navi.classList.toggle('flex')
    navi.classList.toggle('hidden')
})