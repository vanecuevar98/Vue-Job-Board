<script>
export default {
  name: 'AppTwo',
  data() {
    return {
      name: 'John Doe',
      status: 'pending',
      tasks : [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
        { id: 3, title: 'Task 3', completed: false }
      ],
      link: 'https://vuejs.org',
    }
  },
  methods: {
    toggleStatus() {
      this.status = this.status === 'active' ? 'inactive' : this.status === 'pending' ? 'active' : 'pending';
    }
  },
};
</script>

<template>
  <h1>{{ name }}'s vue Jobs</h1>
  <p v-if="status === 'active'">Active</p>
  <p v-else-if="status === 'pending'">Pending</p>
  <p v-else>Inactive</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.title }} -
      <span v-if="task.completed">Completed</span>
      <span v-else>Not Completed</span>
    </li>
  </ul>
  <!-- <a v-bind:href="link" target="_blank">Vue.js Documentation</a> -->
  <a :href="link" target="_blank">Vue.js Documentation</a>
  <br />
  <button @click="toggleStatus">Change Status</button>
</template>

<style scoped>
h1 {
  color: #42b983;
}
</style>
