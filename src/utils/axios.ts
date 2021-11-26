import axios from 'axios';

const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const baseURL = process.env.NEXT_PUBLIC_BASE_API;

const httpRequest = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  params: {
    api_key: key,
    language: 'en-US',
    include_adult: false,
  },
});

export default httpRequest;
