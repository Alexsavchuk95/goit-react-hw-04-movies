import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd8dcb4364bbf117ca1565b75f1e0ef61';

const getItems = () =>
  axios.get(`${API_URL}trending/movie/day?api_key=${API_KEY}`);

const fetchItemById = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=d8dcb4364bbf117ca1565b75f1e0ef61`,
    )
    .then(response => response.data);
};

const getCast = id => {
  return axios
    .get(`${API_URL}movie/${id}/credits?api_key=${API_KEY}`)
    .then(response => response.data);
};

const getReviews = id => {
  return axios
    .get(`${API_URL}movie/${id}/reviews?api_key=${API_KEY}`)
    .then(response => response.data);
};

const getSearch = query => {
  return axios
    .get(`${API_URL}search/movie?api_key=${API_KEY}&${query}`)
    .then(response => response.data.results);
};

export default { getCast, getReviews, getSearch, fetchItemById, getItems };
