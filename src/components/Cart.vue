<template>
    <CartIcon class="cart"/>
</template>

<script setup>
    import CartIcon from '../assets/CartIcon.vue';
    const {itemCount=0}=defineProps(['itemCount'])
</script>

<style lang="css" scoped>
    .cart {
        padding:1px;
        cursor:pointer;
    }
    svg g path{
        stroke: green;
    }
</style>