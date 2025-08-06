<script setup>
import AppListing from './AppListing.vue';
import { RouterLink } from 'vue-router';
import { reactive, defineProps, onMounted } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';
defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false
  }
});

const state = reactive({
  jobs: [],
  loading: true,

});

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
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink>
      </section>
</template>
