const API = "04c35731a5ee918f014970082a0088b1";
const BASE_URL = "https://api.themoviedb.org/3/";
export const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

export const requests = {
  Trending: `${BASE_URL}trending/all/week?api_key=${API}&language=en-US`,
  Popular: `${BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${API}&page=1`,
  NetflixOriginals: `${BASE_URL}discover/tv?api_key=${API}&with_network=123`,
  TopRated: `${BASE_URL}movie/top_rated?api_key=${API}&language=en-US`,
  Action: `${BASE_URL}discover/movie?api_key=${API}&with_genres=28`,
  Comedy: `${BASE_URL}discover/movie?api_key=${API}&with_genres=35`,
  Horror: `${BASE_URL}discover/movie?api_key=${API}&with_genres=27`,
  Romance: `${BASE_URL}discover/movie?api_key=${API}&with_genres=10749`,
  Documentaries: `${BASE_URL}discover/movie?api_key=${API}&with_genres=99`,
  Genre: `${BASE_URL}genre/movie/list?api_key=${API}&language=en-US`,
  Search: `${BASE_URL}search/movie?&api_key=${API}&query=`,
};
