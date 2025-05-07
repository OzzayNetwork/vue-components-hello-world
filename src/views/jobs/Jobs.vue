<template>
    <div>
        <br>
        <br>
        <hr>
        <h2>Available Jobs</h2>
        <hr>
        <div v-for="job in jobs" :key="job.id">            
            
            <router-link :to="{name:'JobDetails',params:{id:job.id}}"><h3>{{job.title}}</h3></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                jobs:[
                    {title:'Front Ebd dev', id: 1, details:'loremmm'},
                    {title:'Back End Dev', id: 2, details:'loremmm2'},
                    {title:'UI/UX three', id: 3, details:'loremmm three'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>