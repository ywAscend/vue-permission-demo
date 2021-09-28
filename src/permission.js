import router from './router'
import store from './store'
import { WhiteList } from '@/router/constants'
import _ from 'lodash'
router.beforeEach(async (to, from, next) => {
    const token = _.get(store.state.loginInfo, 'token')
    if (token) {
        //用户权限
        if (to.name === 'login') { //已登录，导向首页
            next('/')
        } else {
            // 判断用户权限
            // 如果没有用户信息，重新调用登录接口请求用户信息
            if (!store.state.loginInfo.userInfo) {
                try {
                    //获取用户角色
                    const { roles } = await store.dispatch('loginInfo/actionUserInfo')
                    //获取可访问路由
                    const accessRoutes = await store.dispatch('permission/getRoutes', roles)
                    console.log('0000',accessRoutes)
                    //动态添加路由
                    router.addRoutes(accessRoutes)
                    next({ ...to, replace: true })
                } catch (error) {
                    console.warn(error)
                    store.dispatch('loginInfo/resetToken').then(() => {
                        next('/login')
                    })
                }
            } else {
                next()
            }
        }

    } else {
        
        //所以如果无token登录的话不能直接next（'/login'）,否则会进入死循环模式
        //通过创建一个白名单路由，也就是类似于访客模式，只有少数路由如登录路由是可以访问到的
        //也可以在顶层 判断路径是 if(to.name==='login'){ next() return } 防止进入死循环 
        if (WhiteList.includes(to.name)) {
            next()
        } else {
            next({ name: 'login' })
        }
    }
})