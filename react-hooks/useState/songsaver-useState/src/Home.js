
import { useState } from "react";
import Inputs from "./components/Inputs";
import SongList from "./components/SongsList";

const Home = () => {
    const [songs, setSongs] = useState([
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
    ])

    const addSongs = (title, artist, genre, rating) => {
        let newGrocery = [
            ...songs,
            {
                id: songs.length + 1,
                title: title,
                artist: artist,
                genre: genre,
                rating: rating,
            },
        ]
        setSongs(newGrocery)
    };
    const handleDelete = (id) => {
        const newSongs = songs.filter(song => song.id !== id);
        setSongs(newSongs);
    }
    return (
        <div className="home">
            <Inputs addSongs={addSongs} />
            <SongList songs={songs} handleDelete={handleDelete} />
        </div>
    );
}

export default Home;
