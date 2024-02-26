<template>
    <div class="card m-5">
      <div class="card-header">
        <ul class="nav nav-tabs nav-line-tabs-2x mb-5 fs-6">
          <li><a class="nav-link active" href="#list" @click="switchTab('list')">Task List</a></li>
          <li><a class="nav-link" href="#add" @click="switchTab('add')">Add Task</a></li>
        </ul>
        <div class="card-title">{{ activeTab === 'list' ? 'Task List' : 'Add Task' }}</div>
      </div>
  
      <div class="card-body">
        <div class="tab-content">
          <div class="tab-pane box fade show active" id="list">
            <!-- Include the TaskList component -->
            <TaskList />
          </div>
          <div class="tab-pane box fade" id="add">
            <!-- Include the AddTask component -->
            <AddTask />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import TaskList from '../components/TaskList.vue';
  import AddTask from '../components/AddTask.vue';
  
  export default defineComponent({
    name: 'DashboardView',
    components: {
      TaskList,
      AddTask,
    },
    data() {
      return {
        activeTab: 'list', // Default to 'Task List'
      };
    },
    methods: {
      switchTab(tab: string) {
        this.activeTab = tab;
      },
    },
  });
  </script>
  
  <style scoped>
  /* Your styling for DashboardView */
  </style>
  