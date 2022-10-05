1. src/Home.js: Acces to the date in the store.
   const songs = useSelector(state => state.songs);

2. src/components: Create a child-component "SongUpLine" and move there the <li> with the upline from SongList.

3. Do the mapping in src/Home.js, instead of src/components/SongList.js like it was in the useState app. The reason is that I need to use the todo.id in "SongList.js" for the delete function.

4. Before the mapping I need to put 2 functions before the mapping.
   .slice() - I need to do this extra coz is the only way that the sort function will work, unlikely useState where is not needed.
   .sort((a, b) (lin 17 - 28) To sort the list alphabetically.

5. src/components/Inputs.js:
   5.1 Import useDispatch
   import { useDispatch } from "react-redux";

5.2 and call useDispatch
const dispatch = useDispatch();

5.3 Create function "handleSubmit
const handleSubmit = (e)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("artist:", artist + ' title:', title);
        dispatch(addSong({
            title: title,
            artist: artist,
            genre: genre,
            rating: rating,
        }));
        setTitle(''); -> This erase the input text once we press submit. Taks is to the initial state.
        setArtist('');
        setGenre('select');
        setRating('select');
        };

6. src/components/SongList.js:
   6.1 Create the function to delete a single item (song)
   const handleDeleteClick = () => {
   console.log("clicked!")
   dispatch(deleteSong({ id }));
   }

   6.2 Attach the eventHandler to the button
      <li><button onClick={() => handleDeleteClick(id)}

7. src/App.css: Making the shade of the list, the same large of the upline.

.song-preview:hover {
margin: auto 0;
}
