<template>
    <div>
        <h2>{{name}}</h2>
        <h2>Hero Name {{heroName}}</h2>
    </div>
</template>

<script>
import {ref} from 'vue'
    export default {
        name: 'DemoOne',
        setup(){
            const name=ref("Kelvin")
            setTimeout(()=>{
                name.value="Hey Ozzay"
                console.log(name)

            }, 2000)
            return{
                name,
            }
        },
        data(){
            return{
                heroName:'Batman'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>