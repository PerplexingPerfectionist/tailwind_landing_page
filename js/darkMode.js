/* Dark Mode */
const darkMode = document.documentElement
const dayNight = document.getElementById('dayNight')
const sun = document.getElementById('sun')
const moon = document.getElementById('moon')

dayNight.addEventListener('click', () => {
    darkMode.classList.toggle('dark')
    sun.classList.toggle('hidden')
    sun.classList.toggle('flex')
    moon.classList.toggle('flex')
    moon.classList.toggle('hidden')
})