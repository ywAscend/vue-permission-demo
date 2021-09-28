import axios from 'axios'
import store from '../store'

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8081':''

const http = axios.create({
  baseURL, 
  timeout: 5000 
})

// request interceptor
http.interceptors.request.use(
  config => {
  
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// response interceptor
http.interceptors.response.use(
  response => {
    const res = response.data

    return res
    
  },
  error => {
    console.log('err' + error) 
    return Promise.reject(error)
  }
)

export default http
