const APIKEY = "28b09793d201726aeb0afa1a701c9eb7"

const requests = {
    fetchTrending : `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetcActionMovies : `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetcComedyMovies : `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetcHorrorMovies : `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetcRomanceMovies : `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetcMysteryMovies : `/discover/movie?api_key=${APIKEY}&with_genres=9648`,
    fetcScifiMovies : `/discover/movie?api_key=${APIKEY}&with_genres=878`,
    fetcWesternMovies : `/discover/movie?api_key=${APIKEY}&with_genres=37`,
    fetcanimationMovies : `/discover/movie?api_key=${APIKEY}&with_genres=16`,
    fetctvMovies : `/discover/movie?api_key=${APIKEY}&with_genres=10770`,
}

export default requests