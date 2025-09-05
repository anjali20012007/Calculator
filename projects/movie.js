const searchForm = document.querySelector('form');
const movieContainer = document.querySelector('.movie-container');
const inputbox = document.querySelector('.inputbox');

// function to fetch movie details using OMDB API.
const getMovieInfo = async (movie) =>{
    
    const Myapikey = "f8e011e7";
    const url = `http://www.omdbapi.com/?apikey=${Myapikey}&t=${movie}`;

    const response = await fetch(url);
    const data =await response.json(); // for extract the data
    //console.log(data);

 showMovieData(data);
}

// function to show movie data on screen.
const showMovieData = (data) => {
    movieContainer.innerHTML = ""; // for overwritting
    movieContainer.classList.remove('noBackground');

    const {Title , imdbRating , Genre , Released, Runtime, Actors , Director, Year, Poster } = data

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-info'); // add class
    movieElement.innerHTML= `<h2>${Title}</h2>
                             <p><strong>Rating: &#11088; </strong>${imdbRating} </p>`;

 // for Genre

    const movieGenreElement = document.createElement('div'); // creating div
    movieGenreElement.classList.add('movie-genre'); // add class
 
    Genre.split(",").forEach(element => {
        const p = document.createElement('p');
        p.innerText = element;
    });

    movieElement.appendChild(movieGenreElement);

    movieElement.innerHTML += `<p><strong>Released Data :  </strong>${Released} </p>
                            <p><strong>Duration :  </strong>${Runtime} </p>
                            <p><strong>Cast :  </strong>${Actors} </p>
                            <p><strong>Director :  </strong>${Director} </p>
                            <p><strong>year :  </strong>${Year} </p>`;

    // creating poster
    const moviePosterElement = document.createElement('div');
    moviePosterElement.classList.add('movie-poster');
    moviePosterElement.innerHTML = `<img src="${Poster}"/>`;

    movieContainer.appendChild(moviePosterElement);
    movieContainer.appendChild(movieElement);
 }

// function to display error message

const showErrorMessage = (message) => {
    movieContainer.innerHTML = `<h2> ${message}</h2>`;
    movieContainer.classList.add('noBackground');
}
// Adding event listener to search form
searchForm.addEventListener('submit' , (e) =>{
    e.preventDefault(); // for stop the auto submit.
    const movieName = inputbox.value.trim(); // trim remove extra space
    if (movieName !=='') {
        getMovieInfo(movieName);
    }
    else {
       showErrorMessage("Please enter movie name");
        
    }
});
