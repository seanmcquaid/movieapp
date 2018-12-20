// All api calls go to the this link
const apiBaseUrl = 'http://api.themoviedb.org/3';
// All images use this link
const imageBaseUrl = 'http://image.tmdb.org/t/p/';

const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;

$.getJSON(nowPlayingUrl, (movieData)=>{
    console.log(movieData);
    movieData.results.forEach((movie)=>{
        const posterUrl = `${imageBaseUrl}w300${movie.poster_path}`;
        const newHTML = `
        <div class="col-4">
            <img src="${posterUrl}"/>
            ${movie.title}
        </div>`;
        $("#movie-grid").append(newHTML);
    });
});