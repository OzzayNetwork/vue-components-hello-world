<template>
    <div>

    </div>
    <h3 v-for="name in names" :key="name.firstName">
        {{name.firstName}} {{name.lastname}}
    </h3>
</template>

<script>
    export default {
        name:'NameList',
        data(){
            return{
                names:[
                    {
                        firstName:'Bruce',
                        lastname:'Wayne'
                    },
                    {
                        firstName:'Clark',
                        lastname:'Kent'
                    },
                    {
                        firstName:'Princess',
                        lastname:'Diana'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>