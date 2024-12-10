<template>
    <button class="bg-accent text-primary-dark-0 border-primary-dark-0 w-[225px] h-[65px] border place-items-center transition-all outline-none
                hover:bg-primary-dark-0 hover:text-background
                focus:bg-primary-light focus:text-primary-dark-0 focus:border
                active:bg-primary-dark-100 active:text-background active:border-primary-dark-100
                tablet-690:h-[60px]">
        <p>{{value}}</p>
    </button>
</template>

<script setup>
    const {value='Some value'}=defineProps(['value']);
</script>