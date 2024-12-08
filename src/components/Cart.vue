<template>
    <button class="cart transition-all" v-html="CartIcon">

    </button>
</template>

<script setup>
    import CartIcon from '../assets/shopping-cart.svg?raw';
    const {itemCount=0}=defineProps(['itemCount'])
</script>

<style lang="css" scoped>
    .cart {
        padding:1px;
        cursor:pointer;
    }
    .cart :deep(path){
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }
    .cart:hover :deep(path){
        stroke:#598D66;
    }
    .cart:focus :deep(path){
        stroke:#598D66;
    }
    .cart:active :deep(path){
        stroke:#376B44;
    }
    .cart:focus{
        background-color:#E1EDE6;
    }
</style>