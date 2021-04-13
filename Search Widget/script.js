//The querySelector() method returns the first element that matches a specified CSS selector(s) in the document
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

//adding an event listener to listen for the click 
btn.addEventListener('click', () => {
    //toggles the icon to active and not active
    search.classList.toggle('active')
    //focuses the cursor to the start of the search box
    input.focus()
})