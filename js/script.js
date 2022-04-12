/* Mobile Menu */
const button = document.getElementById('menu-btn')
const navi = document.getElementById('menu')

function handleMenuClick() {
    button.classList.toggle('open')
    navi.classList.toggle('flex')
    navi.classList.toggle('hidden')
}

button.addEventListener('click', handleMenuClick)

window.onunload = function() {
    console.log("clearing event listeners prior to leaving page");
    document.body.removeEventListener('click', handleMenuClick);
    return;
}