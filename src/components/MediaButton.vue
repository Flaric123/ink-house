<template>
    <button class="media w-max h-max transition-all rounded-[2px] outline-none" v-html="src"></button>
</template>

<script setup>
    const {src=''}=defineProps(['src'])
</script>

<style lang="css" scoped>
    .media :deep(path){
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }
    .media:hover :deep(path){
        fill:#598D66;
    }
    .media:focus :deep(path){
        fill:#598D66;
    }
    .media:focus{
        background-color:#E1EDE6;
    }
    .media:active :deep(path){
        fill:#376B44;
    }
</style>