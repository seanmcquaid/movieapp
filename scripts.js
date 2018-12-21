// All api calls go to the this link
const apiBaseUrl = 'http://api.themoviedb.org/3';
// All images use this link
const imageBaseUrl = 'http://image.tmdb.org/t/p/';

const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;

$.getJSON(nowPlayingUrl, (movieData)=>{
    // console.log(movieData);
    for(let i =0; i < 6; i++){
        let movieInfo = movieData.results[i];
        const posterUrl = `${imageBaseUrl}w300${movieInfo.poster_path}`;
        let newHTML = `
        <div class="posters movie-poster-${i} col-4">
            <img src="${posterUrl}"/>
            <div class="movie-text">
                <div class="title">${movieInfo.title}</div>
                <div class="title">Release Date: ${movieInfo.release_date}</div>
                <div class="title">Popularity: ${movieInfo.popularity}</div>
                <div class="title">Vote Count: ${movieInfo.vote_count}</div>
                <div class="title">Vote Average: ${movieInfo.vote_average}</div>
            </div>
        </div>
        `
        if(i<3){
            $(".top-three").append(newHTML);
        } else{
            $(".bottom-three").append(newHTML);
        }
    }
});

$("#movie-form").submit((event)=>{
    // stop the browser from going forward
    event.preventDefault();
    // get the value the user put in the search box
    const movieSearch = $("#search-input").val();
    const searchUrl = `${apiBaseUrl}/search/movie?api_key=${apiKey}&query=${movieSearch}`;
    let newHTML = "";
    localStorage.setItem("movieList", movieSearch);

    $.getJSON(searchUrl, (movieData)=>{
        // console.log(movieData);
        movieData.results.forEach((movie)=>{
            const posterUrl = `${imageBaseUrl}w300${movie.poster_path}`;
            newHTML += `
            <div clas="col-3">
                <img src="${posterUrl}"/>
            </div>`;
        })
        $("#movie-grid").html(newHTML);
    });
});