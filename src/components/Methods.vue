<template>
    <div>
        <h2>{{name}}</h2>
        <button @click="setName">Change name</button>


        <p>with ref Method to store data</p>
        <h2>{{count}}</h2>
        <button @click="increamentCount">Increament</button>
        <br>

        <p>Using reactive</p>
        <h2>{{first}} {{last}}</h2>
        <button @click="changeHero">Change Hero</button>

    </div>
</template>

<script>
import {ref, reactive, toRefs} from 'vue'
    export default {
        name:'Methods',
        setup(){
            const count=ref(0)
            const state =reactive({
                first:'Bruce',
                last: 'Wayne'
            })
            function increamentCount(){
                count.value++
            }
            function changeHero(){
                state.first="Hey"
                state.last="Ozzay"
            }
            return{
                count,
                increamentCount,
                ...toRefs(state),
                changeHero
            }
        },
        data(){
            return{
                name:"Kelvin"
            }
        },
        methods:{
            setName(){
                this.name="Hey Ozzay"
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>