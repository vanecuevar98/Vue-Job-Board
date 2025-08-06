<script setup>
// Import the AppListing component for individual job cards
import AppListing from './AppListing.vue';
// Import RouterLink for navigation
import { RouterLink } from 'vue-router';
// Import Vue composition API functions
import { reactive, defineProps, onMounted } from 'vue';
// Import PulseLoader for loading spinner
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
// Import axios for HTTP requests
import axios from 'axios';

// Define props: 'limit' for max jobs to show, 'showButton' to display "View All Jobs"
defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false
  }
});

// Reactive state for jobs and loading status
const state = reactive({
  jobs: [],
  loading: true,
});

// Fetch jobs from API when component mounts
onMounted(async () => {
  try {
    const response = await axios.get('/api/jobs');
    state.jobs.push(...response.data);
  } catch (error) {
    console.error('Error fetching jobs:', error);
  } finally {
    state.loading = false;
  }
});
</script>
<template>
  <!--
    Job Listings section with a title, loading spinner, and job cards.
    Shows up to 'limit' jobs. Optionally displays a button to view all jobs.
  -->
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Job Listings</h2>
      <!-- Loading Spinner -->
      <div v-if="state.loading" class="text-center text-gray-600 py-6">
        <PulseLoader :loading="state.loading" color="#22c55e" size="15px" />
      </div>
      <!-- Job Listings -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AppListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
        :key="job.id"
        :job="job" />
      </div>
    </div>
  </section>
  <!-- "View All Jobs" button, shown if 'showButton' prop is true -->
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink>
      </section>
</template>
