import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index'

// import Home from '../pages/main/Home'
import Sort from '../pages/sort/Sort'
import Community from '../pages/community/Community'
import Car from '../pages/car/Car'
import MySelf from '../pages/mySelf/MySelf'

import SearchDetail from '../pages/search/SearchDetail'

Vue.use(VueRouter)


let routes= [
    {
        path:'/',
        redirect:'/home',
        component:Index,
        children:[
            {
                path:'/home',
                name:'home',
                
                //懒加载，分离打包组件，有利于优化
                component:()=>import('../pages/main/Home')
            },
            {
                path:'/sort',
                name:'sort',
                component:Sort
            },
            {
                path:'/community',
                name:'community',
                component:Community
            },
            {
                path:'/car',
                name:'car',
                component:Car
            },
            {
                path:'/myself',
                name:'myself',
                component:MySelf
            },
        ]
    },
    {
        path:'/searchdetail',
        name:'searchdetail',
        component:SearchDetail
    }
    

]

export default new VueRouter({
    routes
})