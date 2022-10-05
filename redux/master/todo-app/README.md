Check tutorials videos:
Till min 29 of tutorial video
https://www.youtube.com/watch?v=fiesH6WU63I

FRom min 50
https://www.youtube.com/watch?v=tBigGpLRMtU

## STEPS:

1.  In the terminal:
    npx create-react-app todo-app
    npm install redux react-redux
    npm install @reduxjs/toolkit

2.  "Clean app". Delete all the files that are not needed.

3.  src: Create another folder named "redux"

4.  src/redux: Create a file "store.js"

5.  src/redux: Create a file "todoSlice.js"

6.  src/index.js:
    6.1 - Import store:
    import store from './redux/store';
    6.2 - Import provider
    import { Provider } from 'react-redux';
    6.3 - Wrap the Provider around the App so the whole app has access to the store:

        <Provider store={store}>
          <App />
        </Provider>

N: Aqui tuve un bug que me tuvo ocupado por una hora. No puedp copiar el index.js de otras app outdated!

7. Elements of the Store. Check src/redux/store.js

8. Create the CongifureSlice(TodoSlice). Several steps:
   8.1 Importe createSlice:
   import { createSlice } from '@reduxjs/toolkit';

8.2 Import "todosData". This is the file that contains the array of objects (data).
import todosData from '../components/todosData';

8.3 Create the function "todoSlice = createSlice({})". (lin 4 - 18)
8.3.1 -
name: 'todos',
8.3.2 - InitialState get the values from "todosData.js":
initialState: todosData,

8.3.3 Create reducers (lin 7 - 17).
This is the most important, It took me a whole day to fig it out. action.payload is the value of the id that we pass in the handleEvent function(src/components/TodoItems.js)

    reducers: {
        toggleCompleted: (state, action) => {
            let updatedTodos = state.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            state = updatedTodos
        }
    }

8.3.4 - Export the reducer:
export const { toggleCompleted } = todoSlice.actions;

8.3.5 - Export the slice:
export default todoSlice.reducer;

9. App.js: Pass the data of the store to the app so we can mapping and display the list.
   const todos = useSelector(state => state.todos);

10. src/components: Create TodoItems.js. Here will be create the checkbox and the displayed list (<p>). There are too many steps to describe. Theck the file. The most important is line 27 where is the eventHandler. I have to make like a function otherwise it doesnt work.
