<template>
    <div class="max-w-[1140px] px-[15px] h-max flex gap-[30px] place-self-center mt-[70px]
    desktop:flex-row
    tablet-690:flex-col">
        <img src="../assets/team.png" class="desktop:w-full
        tablet-690:w-[510px] tablet-690:h-[504px]"/>
        <div class="flex flex-col w-full h-max gap-[20px] self-end mb-[44px]">
            <p class="text-[40px] text-foreground leading-[44px] text-left">Наша комманда</p>
            <p class="text-[18px] text-foreground leading-[27px] text-left">Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
            <div class="h-[80px] gap-[30px] w-max flex flex-row">
                <Avatar src="../assets/person1.jpeg"/>
                <Avatar src="../assets/person2.jpeg"/>
                <Avatar src="../assets/person3.jpeg"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import Avatar from './Avatar.vue';


</script>