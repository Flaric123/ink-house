<template>
    <div class="w-full h-[168px] flex flex-row bg-primary-light justify-center mt-[70px]">
        <div class="h-max w-[1140px] px-[15px] flex flex-row self-center justify-between">
            <div class="h-max flex flex-col gap-[35px] w-max">
                <div class="flex flex-row gap-x-[8px] h-max self-start">
                    <img class="w-[35px] h-[35px]" src="../assets/favicon.svg"/>
                    <p class="font-bold text-primary-dark-100 self-center">Ink. House</p>
                </div>
                <div class="flex flex-col gap-[8px] w-max h-max">
                    <p class="text-foreground text-[20px]">+7 (999) 543-54-54</p>
                    <p class="text-foreground-detail text-left h-min text-[18px] leading-[21px]">Мастерская</p>
                </div>
            </div>
            <div class="grid grid-cols-[repeat(3,min-content)] grid-rows-4 gap-x-[60px] gap-y-[6px] w-max text-left">
                <TextButton value="Репродукции"/>
                <p class="text-foreground-detail text-[18px] row-start-2 col-start-1">Франция</p>
                <p class="text-foreground-detail text-[18px] row-start-3 col-start-1">Германия</p>
                <p class="text-foreground-detail text-[18px] row-start-4 col-start-1">Англия</p>
                <TextButton class="row-start-1 col-start-2" value="Новинки"/>
                <p class="text-foreground-detail text-[18px] row-start-2 col-start-2">2021</p>
                <p class="text-foreground-detail text-[18px] row-start-3 col-start-2">2020</p>
                <TextButton value="О нас"/>
                <p class="text-foreground-detail text-[18px]">Художники</p>
                <p class="text-foreground-detail text-[18px]">Менеджеры</p>
            </div>
            <div class="grid grid-cols-[repeat(3,minmax(0px,min-content))] grid-rows-[repeat(3,minmax(0px,min-content))] gap-x-[30px]">
                <MediaButton :src="fb"/>
                <MediaButton :src="inst"/>
                <MediaButton :src="yt"/>
                <p class="text-[12px] text-foreground-detail col-span-3 mt-[10px]">Ink. House ®</p>
                <p class="text-[12px] text-foreground-detail col-span-3 mt-[6px]">All rights reserved</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import MediaButton from './MediaButton.vue';
import TextButton from './TextButton.vue';
import inst from '../assets/inst.svg?raw';
import yt from '../assets/yt.svg?raw';
import fb from '../assets/fb.svg?raw';

</script>