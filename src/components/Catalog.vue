<template>
    <div class="w-full flex flex-col max-w-[1140px] justify-self-center mt-[70px]
    desktop:px-[15px]
    tablet-690:px-[39px]">
        <div class="w-full flex flex-row justify-between">
            <p class="text-foreground
            desktop:text-[40px]
            tablet-690:text-[30px]">Репродукции</p>
            <div class="w-[428px] justify-between flex flex-row">
                <TabButton value="Франция" id="1" v-model="tabValue"/>
                <TabButton value="Германия" id="2" v-model="tabValue"/>
                <TabButton value="Англия" id="3" v-model="tabValue"/>
            </div>
        </div>
        <div class="grid gap-[30px] mt-[30px]
        desktop:grid-cols-3
        tablet-690:grid-cols-2">
            <CardArt/>
            <CardArt/>
            <CardArt/>
            <CardArt/>
            <CardArt/>
            <CardArt/>
        </div>
    </div>
</template>

<script setup>
    import CardArt from './CardArt.vue';
    import TabButton from './TabButton.vue';
    import { ref } from 'vue';

    const tabValue=ref('');
</script>