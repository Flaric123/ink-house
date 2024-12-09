<template>
    <button class="bg-accent-100 text-foreground border border-accent-100 flex transition-all
                hover:bg-accent-0 hover:border-accent-0
                focus:border-accent-300
                active:bg-accent-200 active:border-accent-200">
        <p class="self-center w-full">{{value}}</p>
    </button>
</template>

<script setup>
    import Button from './Button.vue';
    const {value='Some value'}=defineProps(['value']);
</script>