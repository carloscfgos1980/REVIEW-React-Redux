import { useSelector } from "react-redux";
import Inputs from "./components/Inputs";
import SongList from "./components/SongsList";
import SongUpLine from "./components/SongUpLine";

const Home = () => {
    const songs = useSelector(state => state.songs);



    return (
        <div className="home">
            <Inputs />
            <SongUpLine />
            {songs
                .slice()
                .sort((a, b) => {
                    let a1 = a.artist.toLowerCase(),
                        a2 = b.artist.toLowerCase();

                    if (a1 < a2) {
                        return -1;
                    }
                    if (a1 > a2) {
                        return 1;
                    }
                    return 0;
                })
                .map(song => (
                    <SongList key={song.id} id={song.id} song={song} />
                ))}
        </div>
    );
}

export default Home;

// songs.sort((a, b) => {
//     let a1 = a.artist.toLowerCase(),
//         a2 = b.artist.toLowerCase();

//     if (a1 < a2) {
//         return -1;
//     }
//     if (a1 > a2) {
//         return 1;
//     }
//     return 0;
// });



    // const addSongs = (title, artist, genre, rating) => {
    //     // let newGrocery = [
    //     //     ...songs,
    //     //     {
    //     //         id: songs.length + 1,
    //     //         title: title,
    //     //         artist: artist,
    //     //         genre: genre,
    //     //         rating: rating,
    //     //     },
    //     // ]
    //     // setSongs(newGrocery)
    // };
    // const handleDelete = (id) => {
    //     // const newSongs = songs.filter(song => song.id !== id);
    //     // setSongs(newSongs);
    // }