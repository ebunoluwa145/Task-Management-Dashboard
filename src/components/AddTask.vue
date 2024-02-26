<template>
    <div>
      <!-- Your form elements go here -->
      <label>Name:</label>
      <input v-model="newTask.name" />
  
      <label>Description:</label>
      <input v-model="newTask.description" />
  
      <label>Status:</label>
      <input v-model="newTask.status" />
  
      <!-- Your form buttons go here -->
      <button @click="addTask">Add Task</button>
      <button @click="cancelAdd">Cancel</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useStore } from 'vuex';
  import { Task } from '@/models/Task';
  
  export default defineComponent({
    name: 'AddTask',
    setup() {
      const store = useStore();
  
      const newTask
  