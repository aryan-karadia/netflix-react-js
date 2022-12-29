const key = 'cdf0becbf8b67f2701bc27498771013d'


const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${key}&language=en-US`,
    requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
    requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;