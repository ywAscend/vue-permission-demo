import LocalStore from '@/utils/LocalStore'
import { Login, getUserInfo } from '@/api'

const initState = {
    username: '',
    password: '',
    token: LocalStore.get('token'),
    roles: [],
    userInfo: ''
}


const getters = {
    userInfo: state => state.userInfo,
    token: state => state.token
}


const actions = {
    actionLogin: ({ commit, state }, options) => {
        return new Promise((resolve,reject) => {
            //根据账户获取token
            Login(options).then(res => {
                if(res.code === '000000'){
                    console.log(res.data)
                    const {data} = res
                    const { token } = data
                    LocalStore.set('token', token)
                    LocalStore.set('username', options.username)
                    commit('mutationLoginInfo', { ...options, token })
                    resolve()
                }else {
                    reject(new Error(res.message))
                }
               
            }).catch(err => {
                reject(err)
            })
        })
    },

    // module A 中访问 module B 中的 actions  
    // A的actions中： dispatch('B的action',data,{root:true})

    actionUserInfo: ({ commit, dispatch, rootState, state }) => {
        console.log(rootState, state)
        return new Promise((resolve, reject) => {
            //获取用户信息
            getUserInfo({ token: state.token }).then((data) => {
                console.log('用户信息', data)
                if (data.data.roles && data.data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
                    commit('SET_ROLES', data.data.roles)
                } else {
                    reject('用户权限列表为空，禁止登录！')
                    return
                }
                commit('setUserInfo', data.data)
                resolve(data.data)
            }).catch(err => {
                reject(err)
            })
        })
    },

    resetToken: ({ commit }) => {
        return new Promise(resolve => {
            commit('mutationLoginInfo', {})
            LocalStore.remove('token')
            LocalStore.remove('username')
            resolve()
        })
    },
}

const mutations = {
    mutationLoginInfo: (state, data) => {
        const { username, password, token } = data
        state.username = username
        state.password = password
        state.token = token
    },
    SET_ROLES: (state, { roles }) => {
        state.roles = roles
    },
    setUserInfo: (state, data) => {
        state.userInfo = data
    }
}

export default {
    namespaced: true,
    state: initState,
    getters,
    actions,
    mutations
}