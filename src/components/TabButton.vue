<template>
    <!-- <button class="w-max bg-primary-light rounded-3xl transition-all text-foreground 
                    hover:bg-primary-dark-0 hover:text-background
                    focus:bg-primary-light focus:border-primary-dark-0 focus:text-foreground
                    active:bg-primary-dark-100 active:text-background">
        <p class="mx-5 my-2.5">{{ label }}</p>
    </button> -->

    <div class="w-max hover:cursor-pointer">
        <input class="peer appearance-none hidden" type="radio" :id="id" v-model="model" :value="value"/>
        <label class="px-5 py-2.5  bg-primary-light rounded-[20px] transition-all text-foreground flex flex-row
                    hover:bg-primary-dark-0 hover:text-background hover:cursor-pointer
                    focus:bg-primary-light focus:border-primary-dark-0 focus:text-foreground focus:border
                    active:bg-primary-dark-100 active:text-background
                    peer-checked:bg-primary-dark-100 peer-checked:text-background" 
                    :for="id">{{value}}</label>
    </div>
</template>

<script setup>
    const model=defineModel()
    const {id='1',value}=defineProps(['id','value'])
</script>

<style lang="scss" scoped>

</style>