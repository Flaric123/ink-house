<template>
    <div class="w-full h-[100px] flex flex-row bg-primary-light justify-center sticky">
        <div class="flex flex-row justify-between max-w-[1140px] w-full px-[15px]">
            <div class="flex flex-row gap-x-[8px] h-max self-center">
                <img class="w-[35px] h-[35px]" src="../assets/favicon.svg"/>
                <p class="font-bold text-primary-dark-100 self-center">Ink. House</p>
            </div>
            <div class="w-[470px] flex flex-row justify-between">
                <TextButton value="Репродукции"/>
                <TextButton value="Новинки"/>
                <TextButton value="О нас"/>
                <Cart/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Cart from './Cart.vue';
    import TextButton from './TextButton.vue';
</script>