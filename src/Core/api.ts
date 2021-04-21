import axios from 'axios';
import { apiUrl } from 'Common/Consts';

export default axios.create({
    baseURL: apiUrl,
    responseType: 'json'
});
