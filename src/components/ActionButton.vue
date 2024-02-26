<template>
    <div>
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click="toggleDropdown"
        >
          Actions
        </button>
        <div class="dropdown-menu" :class="{ show: isDropdownOpen }">
          <button class="dropdown-item" @click="editTask" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
          <button class="dropdown-item" @click="deleteTask">Delete</button>
        </div>
      </div>
  
      <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered mw-650px">
          <div class="modal-content">
            <header class="modal-header">
              <h4 class="modal-title fw-bold m-0">Edit Task</h4>
            </header>
            <div class="modal-body d-flex flex-column gap-5 gap-md-7">
              <!-- Include the EditModalTask component -->
              <EditModalTask :task="taskForEdit" @update-task="saveChanges" @cancel-edit="closeEditModal" />
            </div>
            <footer class="modal-footer">
              <div class="row">
                <div class="col-md-12 text-right">
                  <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import EditModalTask from './components/EditModalTask.vue';
  // ActionButton.vue
import { Task } from '@/models/Task';

  
  export default defineComponent({
    name: 'ActionButton',
    components: {
      EditModalTask,
    },
    props: {
      task: Object as () => Task,
    },
    setup(props) {
      const isDropdownOpen = ref(false);
      const isEditModalOpen = ref(false);
      const taskForEdit = ref<Task | null>(null);
  
      const toggleDropdown = () => {
        isDropdownOpen.value = !isDropdownOpen.value;
      };
  
      const editTask = () => {
        if (props.task) {
          taskForEdit.value = props.task;
          isDropdownOpen.value = false;
          isEditModalOpen.value = true;
        }
      };
  
      const deleteTask = () => {
        // Handle deleting task
        // You can emit an event or perform other actions
        isDropdownOpen.value = false;
      };
  
      const closeEditModal = () => {
        isEditModalOpen.value = false;
      };
  
      const saveChanges = (updatedTask: Task) => {
        // Handle saving changes
        // You can emit an event or perform other actions
        closeEditModal();
      };
  
      return {
        isDropdownOpen,
        isEditModalOpen,
        taskForEdit,
        toggleDropdown,
        editTask,
        deleteTask,
        closeEditModal,
        saveChanges,
      };
    },
  </script>
  
  <style scoped>
  /* Your styling for ActionButton */
  </style>
  