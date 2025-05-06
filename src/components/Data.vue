<template>
    <div>
        <h2>Options - {{ o_firstName }}</h2>
        <h2>Composition - {{ c_firstname }}</h2>
        <h2>Composition - {{ greet }}</h2>
    </div>
</template>

<script>
import {ref} from 'vue'
    export default {
        name:'Date',

        //entry point for composition API
        setup(){
            const c_firstname=ref('Clark')
            c_firstname.value='Diana'
            const greet=`Hello ${c_firstname.value}`
            console.log('C_Firstname ', c_firstname)
            return{
                c_firstname,
                greet,
            }
        },
        data(){
            return{
                o_firstName:'Bruce'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>