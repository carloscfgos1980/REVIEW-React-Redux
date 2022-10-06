import { createSlice } from '@reduxjs/toolkit';

const grocerySlice = createSlice({
    name: 'grocery',
    initialState: [
        { id: 1, title: "Eggs" },
        { id: 2, title: "Cheese" },
        { id: 3, title: "Garlic" },
    ],
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id: Date.now(),//This create unique ids based in the current time
                title: action.payload.title,
            };
            state.push(newItem);
        },
    }
});

export const { addItem } = grocerySlice.actions;

export default grocerySlice.reducer;
