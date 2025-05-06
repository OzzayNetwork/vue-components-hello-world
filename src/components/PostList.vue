<template>
    <div>
        <button @click="getPosts">Load Posts</button>
        <h3 v-if="errorMsg">{{errorMsg}}</h3>
        <div v-for="post in posts" :key="post.id">
            <h3>{{post.id}}. {{post.title}}</h3>
            <p>{{post.body}}</p>
            <hr/>
        </div>
    </div>

    <div class="loader" v-if="isLoading">
        Loading wait please ...
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'PostList',
        created(){
            this.getPosts()
            // use traditionla methods
        },
        data(){
            return {
                posts:[],
                errorMsg:'',
                isLoading: true
            }
        },
        methods:{
            getPosts(){
                axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response)=>{
                    console.log(response.data)
                    this.posts=response.data
                })
                .catch((error)=>{
                    console.log(error)
                    this.errorMsg="Error Retrieving Data"
                })
            }
        },
        mounted() {
    // Simulate loading completion, you can adjust this to fit real conditions
    this.isLoading = false
    console.log("App has been mounted again")
  }
  
    }
</script>

<style lang="scss" scoped>

</style>