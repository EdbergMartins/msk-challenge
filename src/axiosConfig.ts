// axiosConfig.ts
import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1', // Substitua pela URL da sua API
  headers: {
    'Content-Type': 'application/json',
    // Adicione outros headers conforme necessário
  },
});

export default instance;
