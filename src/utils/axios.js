import axios from 'axios';
const key = process.env.NEXT_PUBLIC_TMDB_API_KEY

const httpRequest = axios.create({
  baseURL: 'https://api.themoviedb.org/3/discover/movie',
  timeout: 10000,
  params: {
    api_key: key,
    language: 'en-US',
    include_adult: false
  },
});

export default httpRequest;
