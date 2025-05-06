<template>
    <div>
        <input type="text" placeholder="First Name" v-model="fName">
        <input type="text" placeholder="Last Name" v-model="lName">

        <br> <br>
        <input type="text" placeholder="Hero Name" v-model="heroName">
        <input type="text" placeholder="First Name" v-model="firstname">
        <input type="text" placeholder="Last Name" v-model="lastName">
</div>
</template>

<script>
import { reactive,ref,toRefs } from 'vue'

    export default {
        name:'VModel',
        setup(){
            const heroName=ref('')
            const state=reactive({
                firstname:'',
                lastName:''
            })
            return{
                heroName,
                ...toRefs(state)
            }
        },
        data(){
            return{
                fName:'',
                lName:''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>