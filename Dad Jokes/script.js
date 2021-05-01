//querying joke and jokeBtn
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

//add an event listener and listen for the click and when that happens we want to call generateJoke
jokeBtn.addEventListener('click', generateJoke)

//calling the function generateJoke
generateJoke()

//using .then
//generateJoke function 
// function generateJoke() {
//var config = Headers value object
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//fetching request to the url
//     fetch('https://icanhazdadjoke.com', config)
//we get the res and call res.json to get the json 
//         .then((res) => res.json())
//the second .then gets us the actually data
//         .then((data) => {
//set the jokeEl.innerHTML to equal data.joke
//             jokeEl.innerHTML = data.joke
//         })

// }

//using async/await
//when you use await inside a function you have to label that function async that's why its call async await. The function you label async then any promises that you want to put in a variable you put await 
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    //set variable called res and set it equal to the fetch
    //fetch is async so we have to await until it done fetching 
    const res = await fetch('https://icanhazdadjoke.com', config)
    //set another variable called data to equal res.json. It also returns a promise so we have to put await here too. 
    const data = await res.json()
    //set the jokeEl.innerHTML to equal data.joke
    jokeEl.innerHTML = data.joke

}

