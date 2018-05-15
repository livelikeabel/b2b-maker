import axios from 'axios';
import qs from 'qs';

const addressUrl = process.env.REACT_APP_PLATING_ADDRESS_URL;

export const address = axios.create({
    baseURL: addressUrl,
    paramsSerializer(params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
    },
});