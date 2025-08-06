<script setup>
// Import hero section, home cards, and job listing components for homepage layout
import AppHero from '@/components/AppHero.vue';
import AppHomeCards from '@/components/AppHomeCards.vue';
import AppJobListing from '@/components/AppJobListing.vue';
</script>
<template>
  <!--
    Home page layout with hero section, feature cards, and a preview of job listings.
    Shows only 3 jobs and a button to view all jobs.
  -->
  <AppHero />
  <AppHomeCards />
  <AppJobListing limit="3" :showButton="true" />
</template>
