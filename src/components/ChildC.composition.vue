<template>
    <div>
        <h4>Child C Component</h4>
        <p>Child component C Username - {{userName}}</p>
        <p>Child C Component C Ciomposition Username is {{childUsername}}</p>


        <h3>Parent component C Count {{childCount}}</h3>
        <h3>Parent component C Hero {{firstName}} {{lastName}}</h3>

        <button @click="incrementCount">Icrement Count from Child</button>
    </div>
</template>

<script>
import { inject,toRefs } from 'vue'


    export default {
        name:"ChidC",
        setup(){
           const childUsername= inject('c_userName', 'Default Username')
           const childCount=inject('C_count',0)
           const childHero=inject('c_hero', {})
           const incrementCount=inject('incrementCount')

          

           return{
            childUsername,
            childCount,
            incrementCount,
            ...toRefs(childHero)
           }
        },
        inject:['userName']
    }
</script>

<style lang="scss" scoped>

</style>