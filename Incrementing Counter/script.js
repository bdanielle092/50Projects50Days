const counters = document.querySelectorAll('.counter')

//looping through with a forEach 
counters.forEach(counter => {
    //set counter.innerText to 0
    counter.innerText = '0'
    //updateCounter function 
    const updateCounter = () => {
        //let set the target and then take the counter and set dot getAttribute and the attribute we want to get it data-target
        const target = +counter.getAttribute('data-target')
        //let c is going to equal whatever is in the innerText
        //plus sign makes it a number. Its like using para
        const c = +counter.innerText
        //increment equals target divided by 200
        const increment = target / 200

        //if c is less than target
        if (c < target) {
            //lets take the counter and set the innerText and we want to take that c and add whatever that increment is and use Math.ceil to round up 
            counter.innerText = `${Math.ceil(c + increment)}`
            //we want to pass this in a setTimeout and want to run it at 1 millisecond
            setTimeout(updateCounter, 1)
        } else {
            //counter.innerText to equal whatever the target it 
            counter.innerText = target
        }
    }
    //calling updateCounter
    updateCounter()
})