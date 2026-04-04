import axios from "axios";
import { getFromLocalStorage } from "../../utils/local-storage";

export const instance = axios.create();

instance.defaults.headers.post['Accept'] = 'application/json';
instance.defaults.timeout = 60000;

instance.interceptors.request.use(function (config) {
    const accessToken = getFromLocalStorage('accessToken');
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    const responseObj = {
        data: response?.data?.data,
        meta: response?.data?.meta
    }
    return responseObj;
}, function (error) {
    const status = error?.response?.status;
    if (status === 401 || status === 403) {
        const msg = error?.response?.data?.message || '';
        if (msg.includes('expired') || msg.includes('not Found') || msg.includes('Token')) {
            localStorage.removeItem('accessToken');
            if (window.location.pathname !== '/login') {
                window.location.href = '/login';
            }
        }
    }
    return Promise.reject(error);
});