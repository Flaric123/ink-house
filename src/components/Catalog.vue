<template>
    <div class="w-full flex flex-col max-w-[1140px] px-[15px] justify-self-center mt-[70px]">
        <div class="w-full flex flex-row justify-between">
            <p class="text-[40px] text-foreground">Репродукции</p>
            <div class="w-[428px] justify-between flex flex-row">
                <TabButton value="Франция"/>
                <TabButton value="Германия"/>
                <TabButton value="Англия"/>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-[30px] mt-[30px]">
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
</script>