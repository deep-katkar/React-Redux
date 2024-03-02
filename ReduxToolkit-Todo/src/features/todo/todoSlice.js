import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
  editTodo: null,
  isEdit: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodoText: (state, action) => {
      const { id, text } = action.payload;
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.text = text;
        }
        return todo;
      });
      state.todos = updatedTodos;
      // clearance
      state.isEdit = false;
      state.editTodo = null;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      state.editTodo = { id, text };
      state.isEdit = true;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, updateTodoText } =
  todoSlice.actions;

export default todoSlice.reducer;
