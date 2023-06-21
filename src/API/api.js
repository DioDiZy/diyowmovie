import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;
const d = new Date();
let day = d.getDay();
export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`);
  return search.data;
};

export const getTrendList = async () => {
  const trending = await axios.get(`${baseUrl}/trending/movie/day?api_key=${apiKey}`);
  return trending.data.results;
};
export const searchTrend = async (q) => {
  const searcht = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`);
  return searcht.data;
};
