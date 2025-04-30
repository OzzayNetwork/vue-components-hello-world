<template>
    <div>
        <h2>Component F</h2>
        <h3>Component F Username is{{ userName }}</h3>
    </div>
</template>

<script>
    export default {
        name: 'ComponentF',
        inject:['userName']
    }
</script>

<style lang="scss" scoped>

</style>