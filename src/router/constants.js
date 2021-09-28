
//白名单
export const WhiteList = ['login']


//动态路由
export const asyncRoutes = [
    {
        path:'/infoDetail',
        name:'infoDetail',
        component:()=> import('@/views/InfoDetail'),
        meta:{
            title: '信息详情',
            roles: ['admin','editor']
        }
    },
    {
        path:'/sensMenue',
        name:'sensMenue',
        component: ()=> import('@/views/SensMenue'),
        meta:{
            title: '敏感菜单',
            roles:['admin']
        }
    }
]


export const routerEnums = [
    {
        path:'/userMenue',
        name:'userMenue',
        component: ()=> import('@/views/UserMenue'),
        meta:{
            title: '普通菜单'
        }
    }
]


