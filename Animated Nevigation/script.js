//getting the elements by id
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

//add an event listener to listen for a click 
toggle.addEventListener('click', () => {
    //toggling the active class
    nav.classList.toggle('active')

})