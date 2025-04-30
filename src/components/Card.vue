<template>
    <div class="card">
       <slot>Default Conetent</slot>

       <div id="card-header">
        <slot name="header"></slot>
       </div>
       <div id="card-content">
        <!-- will treated as default if it has no name -->
        <slot></slot>
       </div>
       <div id="card-footer">
        <slot name="footer"></slot>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        
    }
</script>

<style  scoped>
    .card {
        margin-bottom: 24px;
        border-radius: 10px;
        border: 1px solid transparent;
        transition: all .3s ease;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1);
    }

    .card {
    margin-bottom: 20px;
}
</style>