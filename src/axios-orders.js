import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-project-3cc81-default-rtdb.firebaseio.com/'
});

export default instance;