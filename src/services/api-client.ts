import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '052f818254d64c3cb561e5c572175675',
  },
});
