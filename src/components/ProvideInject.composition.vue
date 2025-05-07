<template>
    <div>
        <h2>Parent Component {{name}}</h2>
    </div>
    <ChildACompositionVue/>
    <h3>Parent component Count {{count}}</h3>
    <h3>Parent component Hero {{firstName}} {{lastName}}</h3>

    <button @click="incrementCount">Add count</button>
</template>

<script>
import { reactive, toRefs,provide, ref } from 'vue'
import ChildACompositionVue from './ChildA.composition.vue'


export default {
    name:'ProvideInject',
    components:{
        ChildACompositionVue
    },
    setup () {
        

        provide('c_userName','Hey Ozzay')
        const count=ref(0)
        function incrementCount(){
            count.value++
            
        }
        const state = reactive({
           firstName:'Bruce',
           lastName:'Wayne'
        })

        provide('C_count', count)
        provide('c_hero', state)
        provide('incrementCount',incrementCount)
        
    
        return {
            count,
            incrementCount,
            ...toRefs(state),
        }
    },
    data(){
       return{
         name:'Kelvin'
       }
    },
    provide(){
        return{
            userName:this.name
        }
    }
}
</script>

<style lang="scss" scoped>

</style>