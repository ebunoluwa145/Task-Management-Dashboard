import { createStore } from 'vuex';
import { Task } from '@/models/Task';

interface State {
  tasks: Task[];
}

export default createStore<State>({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, task: Task) {
      state.tasks.push(task);
    },
    deleteTask(state, index: number) {
      state.tasks.splice(index, 1);
    },
    updateTask(state, payload: { index: number; updatedTask: Task }) {
      const { index, updatedTask } = payload;
      state.tasks.splice(index, 1, updatedTask);
    },
  },
});
