//用户权限判断
import {routerEnums,asyncRoutes } from '@/router/constants'


//当前角色是否有权限访问该路由
export const hasPermisson = (route,roles) => {
    if(route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role))
    }
    return true
}


//过滤路由
const filterAsyncRouter = (asyncRouterMap, roles) => {
    console.log('动态路由',asyncRouterMap)
    console.log('用户角色',roles)
    const res = []
    //遍历异步路由,匹配用户角色
    asyncRouterMap.forEach( route => {
        const temp = { ...route }
        if(hasPermisson(route,roles)){
            if(temp.children){
                temp.children = filterAsyncRouter(temp.children,roles)
            }
            res.push(temp)
        }
    })

    return res
}


const initState = {
    routes: routerEnums,
    asyncRoutesEnums:[]
}


const actions = {
    getRoutes: ( {commit}, roles ) => {
        console.log('用户角色',roles)
        return new Promise((resolve)=>{

            let accessRoutes = ''

            if(roles.includes('admin')){   //管理者可以访问所有路由
                accessRoutes = asyncRoutes
            } else { //根据权限筛选路由
                accessRoutes = filterAsyncRouter(asyncRoutes,roles)
            }
            console.log('可访问路由',accessRoutes)
            commit('SET_ROUTERS', accessRoutes)
            resolve(accessRoutes)
        })
    }
}


const mutations = {
    SET_ROUTERS: (state,accessRoutes) => {
        state.asyncRoutesEnums  = accessRoutes
        state.routes = [...routerEnums, ...accessRoutes]
    }
}

const getters = {
    routes: state => state.routes,
    asyncRoutesEnums: state => state.asyncRoutesEnums
}


export default {
    namespaced: true,
    state: initState,
    getters,
    actions,
    mutations
}