<template>
    <div class="w-full flex flex-row max-w-[1140px] px-[15px] justify-self-center gap-[30px]">
        <img src="../assets/bird.png" class="w-[540px] h-[621px]">
        <div class="w-full justify-items-start h-min place-self-center">
            <p class="text-[60px] text-left text-foreground w-full leading-[66px]">Реплики картин от <span class="text-primary-dark-100 text-[60px]">Ink. House</span></p>
            <p class="text-[18px] text-foreground-detail w-full text-left mt-[20px]">Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
            <PrimaryButton value="Продукция" class="mt-[60px] place-items-start"/>
        </div>
    </div>
</template>

<script setup>
    import PrimaryButton from './PrimaryButton.vue';
</script>