const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const welcome = document.querySelector('.welcome')

//load starts at 0 
let load = 0

//int loads the image in 30 minseconds
let int = setInterval(blurring, 30)

//
function blurring() {
    load++
    //if the load is great than 99 we want to clear the interval
    if (load > 99) {
        clearInterval(int)
    }

    //show the image load time text
    loadText.innerText = `${load}%`
    //makes the text fade by setting the load from 0 to 100 and the opacity 1 to 0 
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    //make the image go from blur to an unblur image by setting the load to 0 to 100 and blur 30 to 0
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    //make the welcome text go from blur to an unblur text by setting the load to 0 to 100 and blur 30 to 0
    welcome.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`



}


//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

//wherein you specify in the "minimum" and "maximum" values of expected input and the "minimum" and "maximum" values to be output. This can and will produce out-of-range values if the incoming value itself is not between in_min and in_max
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}