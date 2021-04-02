// querySelector -allows us to select anything
// the querySelectorAll put the panels in a node list, like an array
const panels = document.querySelectorAll('.panel')

//looping through the list
//using a forEach loop to look through the panels

panels.forEach((panel) => {
    //add an eventListener and listen for that click then run this function
    panel.addEventListener('click', () => {
        //function to remove the active class
        removeActiveClasses()
        //add a classList of active 
        panel.classList.add('active')
    })
})
function removeActiveClasses() {
    //using a forEach loop to look through the panels
    panels.forEach((panel) => {
        //remove a classList of active
        panel.classList.remove('active')
    })
}