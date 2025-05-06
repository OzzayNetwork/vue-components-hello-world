<template>
    <div>
        <input type="text" placeholder="First Name" v-model="fName">
        <input type="text" placeholder="Last Name" v-model="lName">
        <h2>Options Fullname is {{fullName}}</h2>

        <br>
        <br>

        <input type="text" placeholder="First Name" v-model="refFirstName">
        <input type="text" placeholder="Last Name" v-model="refLastName">
        <h2>Computed Composition Fullname is {{refFullname}}</h2>

        
        <br>
        <br>

        <input type="text" placeholder="First Name" v-model="reactiveFirstName">
        <input type="text" placeholder="Last Name" v-model="ReactiveLastName">
        <h2>Reactive Fullname is {{reactiveFullName}}</h2>

</div>
</template>

<script>
import { reactive,ref,toRefs, computed } from 'vue'

    export default {
        name:'ComputedComposition',
        setup(){
            const heroName=ref('')
            const refFirstName=ref('')
            const refLastName=ref('')
            const state=reactive({
                firstname:'',
                lastName:'',
                reactiveFirstName:'',
                ReactiveLastName:''
            })
            const refFullname=computed(function(){
                return`${refFirstName.value} ${refLastName.value}`
            })
            const reactiveFullName=computed(function(){
                return`${state.reactiveFirstName} ${state.ReactiveLastName}`
  
            })
            return{
                heroName,
                refFirstName,
                refLastName,
                refFullname,
                reactiveFullName,
                ...toRefs(state)
            }
        },
        data(){
            return{
                fName:'',
                lName:''
            }
        },
        computed:{
            fullName(){
                return `${this.fName} ${this.lName}`
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>