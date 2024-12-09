<template>
    <div class="w-[1140px] px-[15px] h-[440px] flex flex-row gap-[30px] place-self-center mt-[70px]">
        <img src="../assets/team.png"/>
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