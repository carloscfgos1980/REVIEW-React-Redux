import { createSlice } from '@reduxjs/toolkit';

const songList = [
    {
        id: 1,
        title: "Colors",
        artist: "Black Panters",
        genre: "RockRoll",
        rating: 5,
    },
    {
        id: 2,
        title: "Ay amor",
        artist: "Bola de Nieve",
        genre: "Cuban alternative",
        rating: 5,
    },
    {
        id: 3,
        title: "One Love",
        artist: "Bob Marley",
        genre: "Reggae",
        rating: 5,
    }
]

const todoSlice = createSlice({
    name: 'todos',
    initialState: songList,
    reducers: {
        addSong: (state, action) => {
            const newSong = {
                id: Date.now(),//This create unique ids based in the current time
                title: action.payload.title,
                artist: action.payload.artist,
                genre: action.payload.genre,
                rating: action.payload.rating,
            };
            state.push(newSong);
        },
        deleteSong: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id);
        }
    }
});

export const { addSong, deleteSong } = todoSlice.actions;

export default todoSlice.reducer;