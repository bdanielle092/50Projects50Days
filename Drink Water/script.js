const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

//calling updateBigCup function 
updateBigCup()

//looping through with a forEach
//calls a function which we call cup and then idx which will be 0-7
smallCups.forEach((cup, idx) => {
    //add an event listener to listen for a click and then run the highlightCups function and we will pass idx so we know which cup we are clicking on 
    cup.addEventListener('click', () => highlightCups(idx))
})


//highlightCups function 
function highlightCups(idx) {

    if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
    //if the smallCups idx is full and the other smallCups is not full then increment by one
    else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    //loop through the smallCups and say for each cup 
    smallCups.forEach((cup, idx2) => {
        //if idx2 is less or equal to idx that we click on 
        if (idx2 <= idx) {
            //add full
            cup.classList.add('full')
        } else {
            //else remove full
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}


//updateBigCup function 
function updateBigCup() {
    //get the number of full glasses using length
    const fullCups = document.querySelectorAll('.cup-small.full').length
    //get the totalCups using length 
    const totalCups = smallCups.length
    //if fullCups is 0 then hide percentage and height to 0
    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
        //else show percentage and set the height
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        //set the text to show percentage with innerText
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }
    //if fullCups is equal to the totalCups. if its full we want to hide the remained and set the height to 0
    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
        //else show the remained 
    } else {
        remained.style.visibility = 'visible'
        //set the text to show remained with inner text
        listers.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}