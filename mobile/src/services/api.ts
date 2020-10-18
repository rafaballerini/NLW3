import axios from 'axios';

const api = axios.create({
    baseURL: 'http://g7-ibq.anonymous.mobile.exp.direct:3333',
});

export default api;