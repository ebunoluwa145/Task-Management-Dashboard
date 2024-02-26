<template>
    <div>
      <h3>Task List</h3>
      <table class="table mt-4">
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <td>{{ task.name }}</td>
            <td>{{ task.description }}</td>
            <td>{{ task.status }}</td>
            <td>
              <!-- Include the ActionButton component -->
              <ActionButton :task="task" @edit-task="handleEdit(task)" @delete-task="handleDelete(task, index)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useStore } from 'vuex';
  import { Task } from '@/models/Task';



  
  export default defineComponent({
    name: 'TaskList',
    setup() {
      const store = useStore();
  
      const tasks = computed(() => store.state.tasks as Task[]);
  
      const handleEdit = (task: Task) => {
        // Placeholder logic for handleEdit
        console.log('Editing task:', task);
        // Emit an event if needed
        // emit('edit-task', task);
      };
  
      const handleDelete = (task: Task, index: number) => {
        // Placeholder logic for handleDelete
        console.log('Deleting task:', task);
        store.commit('deleteTask', index);
        // Emit an event if needed
        // emit('delete-task', task);
      };
  
      return {
        tasks,
        handleEdit,
        handleDelete,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Your styling for TaskList */
  </style>
  