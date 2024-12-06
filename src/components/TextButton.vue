<template>
    <button class="bg-transparent w-max text-foreground transition-all px-[5px]
    hover:text-primary-dark-0
    focus:bg-primary-light
    active:text-primary-dark-100">
        <p>{{ value }}</p>
    </button>
</template>

<script setup>
    const {value='бла бла'}=defineProps(['value'])
</script>