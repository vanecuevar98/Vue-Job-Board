<script setup>
// Import Vue composition API, axios, toast, and router utilities
import { reactive, onMounted } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toastification';
import { useRoute, useRouter } from 'vue-router';
const toast = useToast();
const route = useRoute();
const router = useRouter();

// Get job ID from route params
const jobId = route.params.id;

// Reactive state for job data and loading status
const state = reactive({
  job: null,
  loading: true,
});

// Reactive form state for editing job
const form = reactive({
  type: 'Full-Time',
  title: '',
  description: '',
  salary: '',
  location: '',
  company: {
    name: '',
    description: '',
    contact_email: '',
    contact_phone: ''
  }
});

// Submit handler for updating the job
const submitJob = async () => {
  const updateJob = {
    title: form.title,
    type: form.type,
    description: form.description,
    salary: form.salary,
    location: form.location,
    company: {
      name: form.company.name,
      description: form.company.description,
      contact_email: form.company.contact_email,
      contact_phone: form.company.contact_phone
    },
  };
  try {
    const response = await axios.put(`/api/jobs/${jobId}`, updateJob);
    // Show success toast and navigate to job detail
    router.push(`/jobs/${response.data.id}`);
    toast.success('Job updated successfully!');
  } catch (error) {
    console.error('Error fetching jobs:', error);
    toast.error('Failed to add job. Please try again.');
  }
};

// Fetch job data and populate form on mount
onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${jobId}`);
    state.job = response.data;
    form.type = state.job.type;
    form.title = state.job.title;
    form.description = state.job.description;
    form.salary = state.job.salary;
    form.location = state.job.location;
    form.company.name = state.job.company.name;
    form.company.description = state.job.company.description;
    form.company.contact_email = state.job.company.contact_email;
    form.company.contact_phone = state.job.company.contact_phone;
  } catch (error) {
    console.error('Error fetching job:', error);
  } finally {
    state.loading = false;
  }
});
</script>
<template>
  <!--
    Edit Job form with fields for job and company info.
    Populates fields with existing job data and submits updates to API.
  -->
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form @submit.prevent="submitJob">
          <h2 class="text-3xl text-center font-semibold mb-6">Edit Job</h2>
          <!-- Job Type -->
          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2">Job Type</label>
            <select v-model="form.type" id="type" name="type" class="border rounded w-full py-2 px-3" required>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <!-- Job Title -->
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Job Listing Name</label>
            <input
              type="text"
              v-model="form.title"
              id="name"
              name="name"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. Beautiful Apartment In Miami"
              required
            />
          </div>
          <!-- Description -->
          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2">Description</label>
            <textarea
              id="description"
              v-model="form.description"
              name="description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Add any job duties, expectations, requirements, etc"
            ></textarea>
          </div>
          <!-- Salary -->
          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2">Salary</label>
            <select v-model="form.salary" id="salary" name="salary" class="border rounded w-full py-2 px-3" required>
              <option value="Under $50K">under $50K</option>
              <option value="$50K - $60K">$50 - $60K</option>
              <option value="$60K - $70K">$60 - $70K</option>
              <option value="$70K - $80K">$70 - $80K</option>
              <option value="$80K - $90K">$80 - $90K</option>
              <option value="$90K - $100K">$90 - $100K</option>
              <option value="$100K - $125K">$100 - $125K</option>
              <option value="$125K - $150K">$125 - $150K</option>
              <option value="$150K - $175K">$150 - $175K</option>
              <option value="$175K - $200K">$175 - $200K</option>
              <option value="Over $200K">Over $200K</option>
            </select>
          </div>
          <!-- Location -->
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Location</label>
            <input
              v-model="form.location"
              type="text"
              id="location"
              name="location"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Company Location"
              required
            />
          </div>
          <h3 class="text-2xl mb-5">Company Info</h3>
          <!-- Company Name -->
          <div class="mb-4">
            <label for="company" class="block text-gray-700 font-bold mb-2">Company Name</label>
            <input
              v-model="form.company.name"
              type="text"
              id="company"
              name="company"
              class="border rounded w-full py-2 px-3"
              placeholder="Company Name"
            />
          </div>
          <!-- Company Description -->
          <div class="mb-4">
            <label for="company_description" class="block text-gray-700 font-bold mb-2">Company Description</label>
            <textarea
              v-model="form.company.description"
              id="company_description"
              name="company_description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="What does your company do?"
            ></textarea>
          </div>
          <!-- Contact Email -->
          <div class="mb-4">
            <label for="contact_email" class="block text-gray-700 font-bold mb-2">Contact Email</label>
            <input
              v-model="form.company.contact_email"
              type="email"
              id="contact_email"
              name="contact_email"
              class="border rounded w-full py-2 px-3"
              placeholder="Email address for applicants"
              required
            />
          </div>
          <!-- Contact Phone -->
          <div class="mb-4">
            <label for="contact_phone" class="block text-gray-700 font-bold mb-2">Contact Phone</label>
            <input
              v-model="form.company.contact_phone"
              type="tel"
              id="contact_phone"
              name="contact_phone"
              class="border rounded w-full py-2 px-3"
              placeholder="Optional phone for applicants"
            />
          </div>
          <!-- Submit Button -->
          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Job
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
