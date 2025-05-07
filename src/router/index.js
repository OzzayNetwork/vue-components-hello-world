import { createRouter,createWebHistory, routeLocationKey } from "vue-router";
import AboutVue from "../views/About.vue"
import HomeVue from "../views/Home.vue";
import JobsVue from "@/views/jobs/Jobs.vue";
import JobDetailsVue from "@/views/jobs/JobDetails.vue";
import NotFound404Vue from "@/views/NotFound.404.vue";



const routes=[
    {
        path:'/',
        name: 'Home',
        component:HomeVue
    },
    {
        path:'/about',
        name: 'About',
        component:AboutVue
    },
    {
        path:'/jobs',
        name: 'Jobs',
        component:JobsVue
    }
    , {
        path:'/jobs/:id',
        name: 'JobDetails',
        component:JobDetailsVue,
        props: true
    },
    // redirect
    {
        path:'/all-jobs',
        redirect:'/jobs',
        // component:NotFound404Vue
    },
    //catchall 404
    {
        path:'/:catchAll(.*)',
        name:'NotFound',
        component:NotFound404Vue
    }


]
const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router

