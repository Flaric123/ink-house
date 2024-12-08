<script setup>
import PrimaryButton from './components/PrimaryButton.vue';
import PromoButton from './components/PromoButton.vue';
import TabButton from './components/TabButton.vue';
import { ref } from 'vue';
import TextButton from './components/TextButton.vue';
import Cart from './components/Cart.vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Catalog from './components/Catalog.vue';
import Promo from './components/Promo.vue';
import Button from './components/Button.vue';
import OurTeam from './components/OurTeam.vue';
import Avatar from './components/Avatar.vue';
import Footer from './components/Footer.vue';
import MediaButton from './components/MediaButton.vue';
import Facebook from './assets/fb.svg?raw'
import CardArt from './components/CardArt.vue';

const tabValue=ref('Франция');
</script>

<template>
  <Header></Header>
  <Hero/>
  <Catalog/>
  <Promo/>
  <OurTeam/>
  <Footer></Footer>
</template>
