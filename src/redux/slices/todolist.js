import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [
    {
      id: 1,
      title: "going holiday",
      status: "inprogress",
      description: "daaalo mountain"
    }
  ]
}

const todoslice = createSlice({
  name: "todoslice",
  initialState,
  reducers: {
    addtodo(state, action) {
      const newTodo = {
        id: Date.now(),   // ✔ always unique
        title: action.payload.title,
        description: action.payload.description,
        status: action.payload.status,
      };
      state.todos.push(newTodo);
    }
  }
})

export const { addtodo } = todoslice.actions;

export default todoslice;
