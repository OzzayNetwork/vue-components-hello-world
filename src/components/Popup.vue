<template>
    <div>
        <p>This is a Pop up</p>
        <input type="text" v-model="name" />
        <button @click="$emit('close', name)">Close Popup</button>

    </div>
</template>

<script>
    export default {
        name:'PopupComponent',

        // emits items from child to parent component
        emits:{
            close: (name)=>{
                if(!name){
                    return false
                } else{
                    return true
                }
            }
        },
        data(){
            return{
                name:''
            }
        }
    }
</script>

<style scoped>

</style>