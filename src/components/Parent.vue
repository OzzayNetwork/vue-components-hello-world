<template>
    <div>
        Parent Component
        <button @click="showChild =!showChild">Toggle Child</button>
        <Child v-if="showChild" />

    </div>
</template>

<script>
import Child from './Child.vue'
    export default {
        components:{Child},
        name:'Parent',

        beforeCreate(){console.log('Parent BeforeCreate')},
        created(){console.log('Parent Created()')},
        beforeMount(){console.log('Parent beforeMount()')},
        mounted(){console.log('Parent mounted()')},
        beforeUpdate(){console.log('Parent beforeUpdate()')},
        beforeMount(){console.log('Parent beforemount()')},
        updated(){console.log('Parent Updated()')},
        beforeUnmount(){console.log('Parent beforeUnmount()')},

        data(){
            return{
                showChild:true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>