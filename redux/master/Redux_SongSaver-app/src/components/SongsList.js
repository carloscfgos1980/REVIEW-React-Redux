
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteSong } from "../redux/todoSlice";

const SongList = ({ song, id }) => {

    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        console.log("clicked!")
        dispatch(deleteSong({ id }));
    }

    return (
        <div className="song-list">
            <div className="song-preview">
                <ul>
                    <li >{song.artist}</li>
                    <li>{song.title}</li>
                    <li >{song.genre}</li>
                    <li >{song.rating}</li>
                    <li><button onClick={() => handleDeleteClick(id)} className="button-list" ><FaTrash /></button></li>
                </ul>
            </div>
        </div>
    );
}

export default SongList;