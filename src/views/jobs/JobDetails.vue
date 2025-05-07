<template>
    <div>
        <h2>Job Details Page</h2>
        <p>The Job ID is {{$route.params.id}}</p>
    </div>
</template>

<script>
    export default {
        name:'JobDetails',
        props:['id'],
        data(){
            return{
                id:this.$route.params.id
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>