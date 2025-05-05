<template>
    <div>
        Child Component
    </div>
</template>

<script>
import { onUpdated } from 'vue'
    export default {
        name: 'Child',
        beforeCreate(){console.log('child BeforeCreate')},
        created(){console.log('child Created()')},
        beforeMount(){console.log('child beforeMount()')},
        mounted(){console.log('child mounted()')},
        beforeUpdate(){console.log('child beforeUpdate()')},
        beforeMount(){console.log('child beforemount()')},
        updated(){console.log('child Updated()')},
        beforeUnmount(){console.log('child beforeUnmount()')}
    }
</script>

<style lang="scss" scoped>

</style>