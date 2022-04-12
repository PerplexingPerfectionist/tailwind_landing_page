/* Dark Mode */
const darkMode = document.documentElement
const dayNight = document.getElementById('dayNight')
const sun = document.getElementById('sun')
const moon = document.getElementById('moon')

function handleDarkMode() {
    darkMode.classList.toggle('dark')
    sun.classList.toggle('hidden')
    sun.classList.toggle('flex')
    moon.classList.toggle('flex')
    moon.classList.toggle('hidden')
}

dayNight.addEventListener('click', handleDarkMode)

window.onunload = function() {
    console.log("clearing event listeners prior to leaving page");
    document.body.removeEventListener('click', handleDarkMode);
    return;
}