import axios from 'axios';

const X_MICROCMS_API_KEY: string = process.env.X_MICROCMS_API_KEY || '';

const baseAxios = axios.create({
  headers: {
    'Content-type': 'application/json',
    'X-MICROCMS-API-KEY': X_MICROCMS_API_KEY,
  },
});

export default baseAxios;
