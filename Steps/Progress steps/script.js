const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1

//adding an event listener for the click and then run the function 
next.addEventListener('click', () => {
    //this currentActive++ will take what is currentActive at the time and add one
    //if it set to one then it will be set to two
    currentActive++

    //the if statement stop it from going pass the length of the circles
    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})


//adding an event listener for the click and then run the function 
prev.addEventListener('click', () => {
    //this currentActive-- will take what is currentActive at the time and subtract one
    //if it set to four then it will be set to three
    currentActive--

    //the if statement stop it from going pass circle one
    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})


//update function 
function update() {
    //looping through the circles 
    circles.forEach((circle, idx) => {
        //if the idx is less than currentActive then add active 
        //else remove active
        if (idx < currentActive) {

            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    //gets all the active circles
    const actives = document.querySelectorAll('.active')


    //get the percentage of the circles that have been clicked  for the progress bar/line
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    //if currentActive is equal to one we want to disable prev bnt and set it to true 
    if (currentActive === 1) {
        prev.disabled = true

        //else if  the circles are at the end we want to disable the next bnt and set it to true
    } else if (currentActive === circles.length) {
        next.disabled = true

        //if we are not at the start or end then we don't want either prev or next bnt to be disabled 
    } else {
        prev.disabled = false
        next.disabled = false
    }

}