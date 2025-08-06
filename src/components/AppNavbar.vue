<script setup>
// Import logo image and Vue Router utilities
import logo from '../assets/img/logo.png';
import { RouterLink, useRoute } from 'vue-router';

// Function to check if a navigation link is active
const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <!--
    Navigation bar with logo and links to Home, Jobs, and Add Job.
    Highlights the active link.
  -->
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="isActiveLink('/') ? 'text-white bg-green-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white rounded-md px-3 py-2'"
              >Home</RouterLink>
              <RouterLink
                to="/jobs"
                :class="isActiveLink('/jobs') ? 'text-white bg-green-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white rounded-md px-3 py-2'"
              >Jobs</RouterLink>
              <RouterLink
                to="/add-job"
                :class="isActiveLink('/add-job') ? 'text-white bg-green-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white rounded-md px-3 py-2'"
              >Add Job</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
