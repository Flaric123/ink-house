<template>
    <button class="bg-accent-100 text-foreground border border-accent-100 px-14 py-5 transition-all
                hover:bg-accent-0 hover:border-accent-0
                focus:border-accent-300
                active:bg-accent-200 active:border-accent-200">
        <p>{{value}}</p>
    </button>
</template>

<script setup>
    const {value='Some value'}=defineProps(['value']);
</script>