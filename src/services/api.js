import axios from 'axios';

const api = axios.create(
    {
        //ip que aparece no expo, com a porta do node
        baseURL: 'http://192.168.1.122:3333'
    }
)

export default api;