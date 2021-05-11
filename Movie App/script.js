const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main')

//Get initial movies
getMovies(API_URL)

//getMovies Function 
async function getMovies(url) {
    //await fetch and pass in our url
    const res = await fetch(url)
    //await res.json which will give us the actually data
    const data = await res.json()
    //call showMovies function 
    showMovies(data.results)
}

//showMovies function 
function showMovies(movies) {
    //set the main.innerHTML to nothing. So first we clear it 
    main.innerHTML = ''

    //looping through the movies
    movies.forEach((movie) => {
        //pulling the info from the movie
        const { title, poster_path, vote_average, overview } = movie
        //creating an element 
        const movieEl = document.createElement('div')
        //take the movieEL and add a class to of movie which is going to give us our initial div
        movieEl.classList.add('movie')
        //display text and image to the dom 
        movieEl.innerHTML = `
 
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
        <h3>Overview</h3>
       ${overview}
    </div>

    `
        //put it into the dom by using appendChild on main 
        main.appendChild(movieEl)
    })
}

//getClassByRate and pass in vote 
function getClassByRate(vote) {
    //if greater than or equal to 8 return green
    if (vote >= 8) {
        return 'green'
        //if greater than or equal to 5 return orange
    } else if (vote >= 5) {
        return 'orange'
        //else to red
    } else {
        return 'red'
    }
}
//event listener that listens for submit and put e here so it doesn't actually submit to the page
form.addEventListener('submit', (e) => {
    e.preventDefault()

    //searchTerm = search value
    const searchTerm = search.value
    //if searchTerm exists and if searchTerm is not equal to anything 
    if (searchTerm && searchTerm !== '') {
        //call getMovies and then we're going to add on to that whatever the searchTerm is
        getMovies(SEARCH_API + searchTerm)
        //then clear the search.value
        search.value = ''
    } else {
        //so if we submit without having anything there it will reload the page
        window.location.reload()
    }
})

