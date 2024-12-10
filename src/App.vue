<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Catalog from './components/Catalog.vue';
import Promo from './components/Promo.vue';
import Button from './components/Button.vue';
import OurTeam from './components/OurTeam.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header></Header>
  <Hero/>
  <Catalog/>
  <Promo/>
  <OurTeam/>
  <Footer></Footer>
</template>
