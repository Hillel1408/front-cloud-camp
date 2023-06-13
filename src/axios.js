import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.sbercloud.ru',
});

export default instance;
