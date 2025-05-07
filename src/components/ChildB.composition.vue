<template>
    <div>
        <h4>Child B Component</h4>
    </div>
    <ChildCCompositionVue/>
</template>

<script>
import ChildCCompositionVue from './ChildC.composition.vue'

    export default {
        name:"ChidB",
        components:{
            ChildCCompositionVue
        }
    }
</script>

<style lang="scss" scoped>

</style>