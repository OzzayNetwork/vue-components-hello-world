<template>
    <div>
       <h4> Child A Component</h4>
    </div>
    <ChildbCompositionVue/>
</template>

<script>
import ChildbCompositionVue from './ChildB.composition.vue'

    export default {
        name:"ChidA",
        components:{
            ChildbCompositionVue
        }
    }
</script>

<style lang="scss" scoped>

</style>