<template>
    <div class="w-full h-max flex flex-col bg-primary-light p-[20px] items-start">
        <img src="../assets/art.jpeg" class="desktop:w-[310px] desktop:h-[421px]
        tablet-690:w-[290px] tablet-690:h-[422px]">
        <p class="text-[18px] text-foreground-detail pt-[20px]">Франсуа Дюпон</p>
        <p class="text-[30px] text-foreground pt-[10px]">Процедура</p>
        <p class="text-[18px] w-full text-foreground pt-[8px] text-left">Цветная литография (40x60)</p>
        <p class="text-[24px] text-primary-dark-0 pt-[30px] pb-[20px]">20 000 руб</p>
        <PrimaryButton value="В корзину" class="w-full"/>
    </div>
</template>

<script setup>
    import PrimaryButton from './PrimaryButton.vue';
</script>