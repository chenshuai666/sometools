import axios from 'axios'

const http = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 3000
})

http.interceptors.request.use(function (config) {
    // console.log(window.localStorage)
    if (window.localStorage.getItem('token')) {
        config.auth = window.localStorage.getItem('token')
    }
    return config
}, function (err) {
    return Promise.reject(err)
})

http.interceptors.response.use(function (res) {
    
}, function (err) {
    return Promise.reject(err)
})


export default http