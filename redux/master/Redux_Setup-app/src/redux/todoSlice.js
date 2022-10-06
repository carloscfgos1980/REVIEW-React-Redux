import { createSlice } from '@reduxjs/toolkit';
import todosData from '../components/todosData';

const todoSlice = createSlice({
    name: 'todos',
    initialState: todosData,
    reducers: {
        // toggleCompleted: (state, action) => {
        //     let updatedTodos = state.map(todo => {
        //         if (todo.id === action.payload) {
        //             todo.completed = !todo.completed;
        //         }
        //         return todo;
        //     });
        //     state = updatedTodos
        // }
    }
});

export const { toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;