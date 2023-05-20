
import { createApp } from 'vue';
import { createWebHistory, createRouter } from "vue-router";

import home from './pages/home.vue';

import frontend from './pages/frontend.vue';

import adminuser from './pages/admin-user.vue';
import alluser from './pages/alluser.vue';
import adduser from './pages/add-user.vue';


import login from './auth/login.vue';

import CreateVote from './pages/createvote.vue';
import CreateVoteList from './pages/votelist.vue';

import LogoUpdate from './pages/LogoUpdate.vue';

import CompanyInformation from './pages/companyinformation.vue';
import store from './store'


const routes =[
    {
        path: '/',
        component: frontend,
    
    },
    {
        path: '/dashboard',
        component: home,
        name:'Dashboard',
        meta: {
            requiresAuth: true,
        },
    
    },
    {
        path: '/dashboard/admin-user-list',
        component: adminuser,
        meta: {
            requiresAuth: true,
        }
    
    },
 

    {
        path: '/dashboard//user-create',
        component: adduser,
         meta: {
            requiresAuth: true,
        }
    
    },
    {
        path: '/dashboard/user-list',
        component: alluser,
        meta: {
            requiresAuth: true,
        }
    
    },

    {
        path: '/dashboard/create-vote',
        component: CreateVote,
        meta: {
            requiresAuth: true,
        }
    
    },
    {
        path: '/dashboard/create-vote-list',
        component: CreateVoteList,
        meta: {
            requiresAuth: true,
        }
    
    },
    {
        path: '/dashboard/company-information-update',
        component: CompanyInformation,
        meta: {
            requiresAuth: true,
        }
    
    },

    {
        path: '/dashboard/logo-favicon-update',
        component: LogoUpdate,
        meta: {
            requiresAuth: true,
        }
    
    },
    

    {
        path: '/login',
        component: login,
        name:'Login',
        meta:{
            requiresAuth:false
        }
    
    },
   
  
]



const router =createRouter({
    history:createWebHistory(),
    routes
});


router.beforeEach((to,from) =>{
    if(to.meta.requiresAuth && store.getters.getToken == 0){
        return { name : 'Login'}
    }
    if(to.meta.requiresAuth == false && store.getters.getToken != 0){
        return { name : 'Dashboard'}
    }
})

export default router;