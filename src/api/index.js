import http from './http'


export const Login = (data) => {
    return http({
        url:'/login',
        method: 'post',
        params:data
    })
}

export const getUserInfo = data => {
    return http({
        url:'/userInfo',
        method: 'post',
        params: data
    })
}

export const LoginOut = (data) => {
    return http({
        url:'/loginOut',
        method:'post',
        params
    })
}