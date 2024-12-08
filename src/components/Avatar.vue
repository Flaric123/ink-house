<template>
    <div class="h-[80px] w-[80px]">
        <img :src=imageSrc class="w-full h-full aspect-square object-cover rounded-full"/>
    </div>
</template>

<script setup>
    const {src=''}=defineProps(['src']);
    const imageSrc=new URL(src,import.meta.url).href
</script>