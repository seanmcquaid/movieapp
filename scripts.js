// All api calls go to the this link
const apiBaseUrl = 'http://api.themoviedb.org/3';
// All images use this link
const imageBaseUrl = 'http://image.tmdb.org/t/p/';

const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;

$.getJSON(nowPlayingUrl, (movieData)=>{
    console.log(movieData);
    
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

{/* 
<div class="movie-text">
<div class="title">${movie.title}</div>
<div class="title">Release Date: ${movie.release_date}</div>
<div class="title">Popularity: ${movie.popularity}</div>
<div class="title">Vote Count: ${movie.vote_count}</div>
<div class="title">Vote Average: ${movie.vote_average}</div>
</div> */}