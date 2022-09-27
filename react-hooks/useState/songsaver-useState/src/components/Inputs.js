import { useState } from "react";


const Inputs = ({ addSongs }) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('select');
    const [rating, setRating] = useState('select');


    const handleSubmit = (e) => {
        e.preventDefault();
        addSongs(title, artist, genre, rating);

        setTitle('');
        setArtist('');
        setGenre('select');
        setRating('select');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>artist:</label>
                <input
                    type="text"
                    required
                    name="artist"
                    placeholder="artist"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
                <label>title:</label>
                <input
                    type="text"
                    required
                    name="title"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>genre:</label>
                <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    name="genre"
                >   <option value="select">-select-</option>
                    <option value="Reggae">Reggae</option>
                    <option value="RockRoll">RockRoll</option>
                    <option value="jazz">Jazz</option>
                    <option value="Cuban alternative">Cuban alternative</option>
                </select>
                <label>rating:</label>
                <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    name="rating"
                >   <option value="select">-select-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button>Add Song</button>

            </form>
        </div>
    );
}

export default Inputs;