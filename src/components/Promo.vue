<template>
    <div class="w-full h-[574px] mt-[70px] relative">
        <img class="w-full h-full" src="../assets/french-work.png"/>
        <div class="max-w-[1140px] w-full px-[15px] flex flex-col justify-self-center self-start absolute inset-0 mt-[70px] justify-items-start">
            <div class="flex flex-row w-[512px] h-[80px] gap-[20px]">
                <img src="../assets/gold-star.svg" class="w-[80px] h-[80px]"/>
                <p class="text-background text-[30px] font-medium text-left w-full h-auto leading-[40px]">Новая коллекция французских авторов</p>
            </div>
            <div class="h-full w-[540px] flex flex-col">
                <p class="text-background text-[18px] font-medium text-left h-min w-[540px] mt-[20px]">
                Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений. 
                </p>
                <p class="text-background text-[18px] font-medium text-left h-min w-[540px] mt-[20px]"> Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.</p>
            </div>
            <PromoButton class="mt-[60px] h-[65px] w-[257px]" value="Ознакомиться"/>
        </div>
    </div>
</template>

<script setup>
    import PromoButton from './PromoButton.vue';
</script>