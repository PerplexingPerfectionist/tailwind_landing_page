function handleAccordionClick(id) {
    // Animate Icon
    console.log( document.getElementById(id).getElementsByTagName('img')[0].classList.toggle('rotate-45') )

    // Toggle classes on sibling 'height and hidden'
    document.getElementById(id).nextElementSibling.classList.toggle('hidden')
    document.getElementById(id).nextElementSibling.classList.toggle('h-0')
}