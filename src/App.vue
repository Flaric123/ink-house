<script setup>
import PrimaryButton from './components/PrimaryButton.vue';
import PromoButton from './components/PromoButton.vue';
import TabButton from './components/TabButton.vue';
import { ref } from 'vue';
import TextButton from './components/TextButton.vue';
import Cart from './components/Cart.vue';
import Header from './components/Header.vue';

const tabValue=ref('');
</script>

<template>
  <Header></Header>
  <div class="flex flex-row gap-x-8">
    <TabButton value="Франция" id="1" v-model="tabValue"/>
    <TabButton value="Перу" id="2" v-model="tabValue"/>
  </div>
</template>

<style scoped>

</style>
