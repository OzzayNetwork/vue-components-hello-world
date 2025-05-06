<template>
    <div>
        <h2>{{firstName}} {{lastName}}</h2>
        <h2>{{fName}} {{lName}}</h2>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
    export default {
      name:'DemoTwo',
      setup(){
        const state=reactive({
            firstName: "Bruce",
            lastName:'Wayne'
        })

        setTimeout(()=>{
            state.firstName="Pricesee"
            state.lastName="Diana"

        }, 2000)

        // enables updating of UI when the changes have happened to varriables

        return toRefs(state)
      },
      data(){
        return{
            fName:'Clark',
            lName:'Kent'
        }
      }  
    }
</script>

<style lang="scss" scoped>

</style>