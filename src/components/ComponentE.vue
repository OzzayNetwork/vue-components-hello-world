<template>
    <div>
        <h2>Component E</h2>
    </div>
    <ComponentF/>
</template>

<script>
import ComponentF from './ComponetF.vue'
    export default {
        name: 'ComponentE',
        components:{
            ComponentF
        }
        
    }
</script>

<style lang="scss" scoped>

</style>