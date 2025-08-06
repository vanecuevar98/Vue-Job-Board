<script setup>
// Import defineProps from Vue for defining component props
import { defineProps } from 'vue';

// Define a 'bg' prop to set the background class, defaulting to 'bg-gray-100'
defineProps({
  bg : {
    type: String,
    default: 'bg-gray-100',
  },
});
</script>
<template>
  <!--
    Render a card div with border, rounded corners, padding, and shadow.
    The background class is set by the 'bg' prop.
    Content is injected via the default slot.
  -->
  <div :class="['border rounded-lg p-4 shadow-md', bg]">
    <slot></slot>
  </div>
</template>
