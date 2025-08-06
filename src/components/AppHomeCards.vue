<script setup>
// Import the AppCard component for reusable card UI
import AppCard from './AppCard.vue';
// Import RouterLink for navigation between routes
import { RouterLink } from 'vue-router';
</script>
<template>
  <!--
    Section displaying two cards: one for developers and one for employers.
    Uses a responsive grid layout.
  -->
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <!-- Card for Developers -->
        <AppCard>
          <h2 class="text-2xl font-bold">For Developers</h2>
          <p class="mt-2 mb-4">
            Browse our Vue jobs and start your career today
          </p>
          <RouterLink
            to="/jobs"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Jobs
          </RouterLink>
        </AppCard>
        <!-- Card for Employers -->
        <AppCard bg="bg-green-100">
          <h2 class="text-2xl font-bold">For Employers</h2>
          <p class="mt-2 mb-4">
            List your job to find the perfect developer for the role
          </p>
          <RouterLink
            to="/add-job"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
          >
            Add Job
          </RouterLink>
        </AppCard>
      </div>
    </div>
  </section>
</template>
