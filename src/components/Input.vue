<template>
    <div>
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">

    </div>
</template>

<script>
    export default {
        name:'InputComponet',
        props:{
            modelValue: String
        }
    }
</script>

<style scoped>
    .custom-file, .custom-select, .form-control, .form-select, input {
    color: #283c50;
    padding: 12px 15px;
    border-color: #e5e7eb;
    border-radius: 5px;
}

input{
    margin-top: 15px;
    display: block;
    width: 70%;
    padding: .375rem .75rem;
    font-size: .845rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .375rem;
    transition: border-color .15s ease, box-shadow .15s ease;
}


</style>