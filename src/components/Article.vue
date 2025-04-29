<template>
    <h2>Article Component</h2>
    <h2>{{ title }}</h2>
    <h2>Likes {{ likes }}</h2>
    <h2>Published {{ isPublished? 'Yes': 'No' }}</h2>
    <div>

    </div>
</template>

<script>
    export default {
        name:'articleComponent',
        props:{
            title:{
                type: String,
                required:true,

                // you can specify default values for props
                default:"Default ARticle String goes Here"
            },
            likes:Number,
            isPublished:Boolean
        }
        
    }
</script>

<style lang="scss" scoped>

</style>