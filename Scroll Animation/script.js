const boxes = document.querySelectorAll('.box')

//event listener for scroll and when that happens we will have  function called checkBoxes
window.addEventListener('scroll', checkBoxes)

checkBoxes()

//function to figure out the trigger point when they are scrolling down 
function checkBoxes() {
    //where in the window do we want it to trigger
    //we are getting the innerHeight of the window
    //we divide the the height by 5 and times it by 4 to get a trigger point which we call triggerBottom
    const triggerBottom = window.innerHeight / 5 * 4

    //looping through the boxes 
    boxes.forEach(box => {
        //Return the size of an element and its position relative to the viewport
        //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        //add .top which will give you the top value
        const boxTop = box.getBoundingClientRect().top

        //we want to see if the top of the box is less than the triggerBottom
        //if it is then we want to add the class box.show
        //if it isn't then we want to remove the class of box.show
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}