<script setup>
import AppHero from '@/components/AppHero.vue';
import AppHomeCards from '@/components/AppHomeCards.vue';
import AppJobListing from '@/components/AppJobListing.vue';
</script>
<template>
  <AppHero />
  <AppHomeCards />
  <AppJobListing limit="3" :showButton="true" />
</template>
