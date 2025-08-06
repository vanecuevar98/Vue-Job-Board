<script setup>
// Import Vue composition API functions and RouterLink for navigation
import { defineProps, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

// Define 'job' prop to receive job data
const props = defineProps({
  job: Object
});

// State to toggle between truncated and full job description
const showFullDescription = ref(false);

// Computed property to show either truncated or full description
const truncatedDescription = computed(() => {
  let description = props.job.description;
  if (!showFullDescription.value) {
    description = description.substring(0, 90) + '...';
  }
  return description;
});

// Toggle description display
const toggleDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};
</script>
<template>
  <!--
    Job card displaying job type, title, truncated/full description, salary, location, and a link to details.
    Includes a button to toggle description length.
  -->
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ job.type }}</div>
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
      </div>

      <div class="mb-5">
        <div>{{ truncatedDescription }}</div>
        <button
          @click="toggleDescription"
          class="text-blue-500 hover:text-green-700 mb-5">
          {{ showFullDescription ? 'Show Less' : 'Show More' }}
        </button>
      </div>

      <h3 class="text-green-500 mb-2">{{ job.salary }}</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="pi pi-map-marker text-orange-700"></i>
          {{ job.location }}
        </div>
        <RouterLink
          :to="'/jobs/' + job.id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
