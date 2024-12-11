<template>
    <div class="w-full flex flex-row max-w-[1140px] desktop:px-[15px] justify-self-center gap-[30px]">
        <img src="../assets/bird.png" class="w-full h-full
        desktop:min-w-[330px] desktop:min-h-[380px]
        tablet-690:min-w-[195px] tablet-690:min-h-[239px]
        tablet-510:min-w-0 tablet-510:min-h-0
        mobile:max-tablet-510:hidden" >
        <div class="w-full justify-items-start h-min place-self-center">
            <p class="desktop:text-[60px] text-left text-foreground w-full desktop:leading-[66px]
            tablet-690:text-[40px] tablet-690:leading-[40px]">Реплики картин от <span class="text-primary-dark-100 desktop:text-[60px] tablet-690:text-[40px] tablet-690:leading-[40px]">Ink. House</span></p>
            <p class="desktop:text-[18px] text-foreground-detail w-full text-left mt-[20px]">Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
            <PrimaryButton value="Продукция" class="w-[225px] mt-[60px]"/>
        </div>
    </div>
</template>

<script setup>
    import PrimaryButton from './PrimaryButton.vue';
</script>