<template>
    <div>
      <!-- Your form elements go here using the task prop -->
      <label>Name:</label>
      <input v-model="task.name" />
  
      <label>Description:</label>
      <input v-model="task.description" />
  
      <label>Status:</label>
      <input v-model="task.status" />
  
      <!-- Your form buttons go here -->
      <button @click="saveChanges">Save Changes</button>
      <button @click="cancelEdit">Cancel</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      task: {
        type: Object,
        required: true,
      },
    },
    methods: {
      saveChanges() {
        // Handle saving changes and emit an event
        this.$emit('update-task', this.task);
      },
      cancelEdit() {
        // Handle canceling edit and emit an event if needed
        this.$emit('cancel-edit');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your styling for EditModalTask */
  </style>
  