<template>
    <div>
        <form action="">
           <div>
                <label for="userId">Post User ID</label>
                <input type="text" id="userId" v-model="formData.userId">
           </div>
        </form>
 
    </div>
</template>

<script>
    export default {
        name: 'CreatePost',
        data(){
            return{
                formData:{
                    userId:'',
                    title:'',
                    body:''
                }
            }
        }
    }
</script>

<style scoped>

</style>