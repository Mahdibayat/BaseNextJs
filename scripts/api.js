import axios from 'axios';
import { useCookies, Cookies } from "react-cookie";
import { Alert } from 'rsuite';
import { Constants } from './settings';
import router from 'next/router';

const _cookies = new Cookies();

const handleError = (response) => {
    let data = response['data'];
    let status = response['status'];
    console.log(response.response)
    if(status === 422 || status === 500) {
        return Object.values(data.errors).forEach(item => Alert.error(`${item}`));
    }
    if(status === 401) {
        _cookies.remove('AccessToken', { path: '/', domain: window.location.hostname });
        _cookies.remove('mobile', { path: '/', domain: window.location.hostname });
        _cookies.remove('user', { path: '/', domain: window.location.hostname });
        router.push('/account');
    }
    if(status === 400) {
        _cookies.remove('AccessToken', { path: '/', domain: window.location.hostname });
        _cookies.remove('mobile', { path: '/', domain: window.location.hostname });
        _cookies.remove('user', { path: '/', domain: window.location.hostname });
        router.push('/account');
        Alert.error("کد وارد شده نامعتبر است")
    }
};

export const get = (url) => {
    axios.defaults.baseURL = Constants.baseUrl;
    axios.defaults.headers.common['Authorization'] = `Bearer ${_cookies.get('AccessToken') || ''}`;
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((response) => {
                if (response && response.data) {
                    resolve(response.data);
                } else {
                    handleError(response , response.statusCode)
                }
            })
            .catch((error) => {
                handleError(error.response);
                reject(error && error.response && error.response.data);
            });
    });
};

const post = (url, params = {}, skip) => {
    axios.defaults.baseURL = Constants.baseUrl;
    axios.defaults.headers.common['Authorization'] = `Bearer ${_cookies.get('AccessToken') || ''}`;
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                handleError(error.response)
                reject(error && error.response && error.response.data)
            });
    });
};

const put = (url, params = {}) => {
    axios.defaults.baseURL = Constants.baseUrl;
    axios.defaults.headers.common['Authorization'] = `Bearer ${_cookies.get('AccessToken') || ''}`;
    return new Promise((resolve, reject) => {
        axios.put(url, params)
            .then((response) => {
                if (response && response.data) {
                    if (response.data.status === 1) {
                        resolve(response.data);
                    } else {
                        handleError(response);
                        reject(response.data);
                    }
                }
            })
            .catch((error) => {
                handleError(error && error.response && error.response.data);
                reject(error && error.response && error.response.data);
            });
    });
};

const del = (url, params = {}) => {
    axios.defaults.baseURL = Constants.baseUrl;
    axios.defaults.headers.common['Authorization'] = `Bearer ${_cookies.get('AccessToken') || ''}`;
    return new Promise((resolve, reject) => {
        axios.delete(url, params)
            .then((response) => {
                if (response && response.data) {
                    if (response.data.status === 1) {
                        resolve(response);
                    } else {
                        handleError(response.data);
                        reject(response.data);
                    }
                }
            })
            .catch((error) => {
                handleError(error && error.response && error.response.data);
                reject(error && error.response && error.response.data);
            });
    });
};

export default {
    user: {
        getToken: (params = {}) => {
            return post(`api/getToken`, params);
        },
        register: (params = {}) => {
            return post('api/register', params);
        },
        confirmRegister: (params = {}) => {
            return post('api/confirmRegister', params);
        },
        info: (params = {}) => {
            return get(`api/user/info`);
        },
        update: (params) => {
            return post(`api/user/info`, params);
        },
        login: (params = {}) => {
            return post('oauth/token', params, true);
        }
    }
};