<template>
    
    <div>
        <h2>Article Component</h2>
        <h2 v-bind="$attrs">{{ title }}</h2>
        <h2>Likes {{ likes }}</h2>
        <h2>Published {{ isPublished? 'Yes': 'No' }}</h2>
        <hr>
        <h1>Non Prop ATtributes</h1>
        <p>A non prop attribute is an attribute that is passed to a component, but does not have a corresponding property defined in props option. eg id, class and style attributes</p>
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
        },

        // prevent the props to be assigned in a default way on the broser
        inheritAttrs: false
        
    }
</script>

<style lang="scss" scoped>

</style>