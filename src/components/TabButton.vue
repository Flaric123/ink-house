<template>
    <div class="hover:cursor-pointer flex h-[43px] w-[126px]">
        <input class="peer appearance-none hidden" type="radio" :id="id" :value="value" v-model="model"/>
        <label class="bg-primary-light h-full self-center w-full rounded-[20px] transition-all text-foreground flex flex-row justify-center items-center outline-none
                    hover:bg-primary-dark-0 hover:text-background hover:cursor-pointer
                    focus:bg-primary-light focus:border-primary-dark-0 focus:text-foreground focus:border
                    active:bg-primary-dark-100 active:text-background
                    peer-checked:bg-primary-dark-100 peer-checked:text-background" 
                    :for="id" tabindex="0">{{value}}</label>
    </div>
</template>

<script setup>
    const model=defineModel()
    const {id='1',value}=defineProps(['id','value'])
</script>