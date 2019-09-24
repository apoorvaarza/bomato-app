import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://react-bomato.firebaseio.com/'
});

export default axiosInstance;