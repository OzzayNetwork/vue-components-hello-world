<template>
    <h2>Hello {{name}} AKA {{heroName }}</h2>
</template>
<script>
    export default{
        name:'GreetComponent',

        // getting the props
        props:['name','heroName']
    }
</script>

<style scoped>

</style>

