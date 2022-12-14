import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../interfaces';
import { store } from '../store';

const actualstorage = JSON.parse(localStorage.getItem('TodoList')!);

const initStorage: any = [];
const storage = actualstorage ? actualstorage : initStorage;

const todoSlice = createSlice({
  name: 'todos',
  initialState: storage,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        name: action.payload.name,
        author: action.payload.author,
        description: action.payload.description,
        type: action.payload.type,
        color: action.payload.color,
        subtasks: action.payload.subtasks,
      };
      state.push(newTodo);
      localStorage.setItem('TodoList', JSON.stringify(state));
    },
    addSubtask: (state, action) => {
      const index = state.findIndex(
        (todo: Todo) => todo.id === action.payload.id
      );
      state[index] = action.payload;

      localStorage.setItem('TodoList', JSON.stringify(state));
    },

    deleteTodo: (state, action) => {
      const updatedList = state.filter(
        (todo: Todo) => todo.id !== action.payload.id
      );
      localStorage.setItem('TodoList', JSON.stringify(updatedList));
      return updatedList;
    },
  },
});

export const { addTodo, addSubtask, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
