const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

//focus the cursor in the textarea
textarea.focus()

//listening for the key up 
textarea.addEventListener('keyup', (e) => {
    //calling the create tag function 
    createTags(e.target.value)

    //if the key is equal to enter 
    if (e.key === 'Enter') {
        //in the setTime we are passing an arrow function and want to wait 10 milliseconds and then clear the input value with a e.target.value and we just set that to nothing 
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        //calling the randomSelect function
        randomSelect()
    }
})

//create tag function 
function createTags(input) {
    //splitting at the comma and creating an array. If its not equal to an empty string trim the white space
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    //clearing the tagsEL
    tagsEl.innerHTML = ''

    //looping through the tags
    tags.forEach(tag => {

        //creating a tag element with document dot createElement and we want to create span
        const tagEl = document.createElement('span')
        //take the tag element and let classList.add with the class of tag
        tagEl.classList.add('tag')
        //take the tag element and set the entire text to whatever the tag is because we are looping through it here
        tagEl.innerText = tag
        //take the tags element and appendChild to add each of these tag elements in 
        tagsEl.appendChild(tagEl)
    })
}

//randomSelect Function 
function randomSelect() {
    //number of times its going to highlight each one before it stops
    const times = 30

    //creating a variable called interval and call the setInterval function 
    const interval = setInterval(() => {
        //set randomTag to pickRandomTag function. Picking a random tag
        const randomTag = pickRandomTag()

        //highlighting the random tag with the highlightTag function 
        highlightTag(randomTag)

        //setTimeout and take in a function to wait every 100 milliseconds here to highlight
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
        //every 100 milliseconds pick a random tag
    }, 100);

    //setTimeout function and we want this to run after whatever the time is 
    setTimeout(() => {
        //we want to clear the interval with the clearInterval function 
        clearInterval(interval)

        // we want to pick a random tag to stop on 
        //setTimeout function which is going to be 100 milliseconds and inside the setTime I want to get a random tag
        setTimeout(() => {
            //we create randomTag and set it to pickRandomTag and then highlight the tag
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
        //we want to multiply that by 100 milliseconds
        //so the 30 above multiply whatever the time is which is 100 milliseconds
    }, times * 100)
}

//pickRandomTag function 
function pickRandomTag() {
    //we can use the document.querySelectorAll and we want to get all the elements of the class of tag
    const tags = document.querySelectorAll('.tag')
    //all of these are put into an node list which is similar to an array with an index. We will use math.floor to round down math.random which will give us a random decimal. We want to multiply that by the length of the tags node list which is similar to an array. This gives us a random tag
    return tags[Math.floor(Math.random() * tags.length)]
}

//creating a function to highlight with a parameter of tag
function highlightTag(tag) {
    // we will take the tag and then do classList.add and we are going to add the highlight class and then remove the highlights
    tag.classList.add('highlight')
}


//calling highlights and removing the highlight 
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}