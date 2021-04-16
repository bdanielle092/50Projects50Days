const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

//add an event listener and listening on mouseenter event which is basically a hover then we are going to call an arrow function and take the container and call classlist.add to add a class and I am going to add a class of hover-left
//this will cause the image to open up more when the mouse hover over it  
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))

//add an event listener and listening on a mouseleave and call an arrow function and take the container and call classList.remove and I am going to remove the class of hover-left
//this will case the image to got back to 50/50 split when the mouse is removed from hovering over the image. Same thing happens on the right side
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))


