const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

//add an event listener that listens for the click and then a function that show the nav
open.addEventListener('click', () => container.classList.add('show-nav'))

//add an event listener that listens for the click and then a function that closes the nav
close.addEventListener('click', () => container.classList.remove('show-nav'))




