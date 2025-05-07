<template>
    <div>
        <input type="text" placeholder="normal watching" v-model="name">

        <input type="text" placeholder="Compositon watching" v-model="firstName">
        <input type="text" placeholder="Compositon watching" v-model="lastName">

        <input type="text" placeholder="Reactive fname" v-model="fName">
        <input type="text" placeholder="Reactive lName" v-model="lName">

        <input type="text" placeholder="Reactive Hero Name" v-model="options.heroNames">

    </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from 'vue'
import _ from 'lodash'

    export default {
        name: 'WatchComposition',
        setup(){
            const state=reactive({
                fName:'',
                lName:'',
                options:{
                    heroNames:''
                }
            })
            // watch(()=>{
            //     return{...state}
            // },function(newValue,oldValue){
            //     console.log('F-name old Value: ', oldValue.fName )
            //     console.log('F-name: new Value', newValue.fName )

            //     console.log('L-name old Value: ', oldValue.lName )
            //     console.log('L-name: new Value', newValue.lName )
            // })

            watch(()=>_.cloneDeep(state.options), function(newValue,oldValue){
                console.log('Old Value: ', oldValue)
                console.log('New Value: ', newValue)
            },{deep:true})

            const firstName=ref('')
            const lastName=ref('Wayne')
            watch([firstName, lastName],(newValues,oldValues) =>{
                console.log('FisrstName Old Value.composition: ', oldValues[0])
                console.log('Fisst Name New Value.composition: ', newValues[0])

                console.log('Last name Old Value.composition: ', oldValues[1])
                console.log('Last name New Value.composition: ', newValues[1])
            },{

                // enables wathcer to run om intitial page load and the subsequebt values as well
                immediate:true
            })
            return{
                firstName,
                lastName,
                ...toRefs(state)
            }
        },
        data(){
            return{
                name:''
            }
        },

        // ref function watchers
        watch:{
            name(newValue,oldValue){
                console.log('Old Value: ', oldValue)
                console.log('New Value: ', newValue)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>