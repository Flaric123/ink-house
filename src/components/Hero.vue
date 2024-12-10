<template>
    <div class="w-full flex flex-row max-w-[1140px] px-[15px] justify-self-center gap-[30px]">
        <img src="../assets/bird.png" class="max-w-[540px] w-full h-full max-h-[621px]">
        <div class="w-full justify-items-start h-min place-self-center">
            <p class="desktop:text-[60px] text-left text-foreground w-full desktop:leading-[66px]
            tablet-690:text-[40px] tablet-690:leading-[40px]">Реплики картин от <span class="text-primary-dark-100 desktop:text-[60px] tablet-690:text-[40px] tablet-690:leading-[40px]">Ink. House</span></p>
            <p class="desktop:text-[18px] text-foreground-detail w-full text-left mt-[20px]">Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
            <PrimaryButton value="Продукция" class="w-[225px] mt-[60px] place-items-start"/>
        </div>
    </div>
</template>

<script setup>
    import PrimaryButton from './PrimaryButton.vue';
</script>