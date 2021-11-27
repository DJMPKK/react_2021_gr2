export const movieFilter = (movies, word) => {

    let filterdMovies = [];
    movies.forEach(movie => {
        if (movie.title.toLowerCase().includes(word.toLowerCase()) || movie.director.toLowerCase().includes(word.toLowerCase())
        || checkActors(movie.actors, word)) {
            filterdMovies.push(movie);
        }
    });

    return filterdMovies;
}

const checkActors = (actors, word) => {
    let result = false;
    actors.forEach(actor => {
        if(actor.toLowerCase().includes(word.toLowerCase())) {
            result = true;
        }
    });

    return result;
}