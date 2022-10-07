## React Redux Todo App Tutorial | Learn Redux with Redux Toolkit (part I)

Till min 29 of tutorial video
https://www.youtube.com/watch?v=fiesH6WU63I

## STEPS:

1. Inside folder "src": Create another folder named "redux"

2. in the terminal:
   npm install redux react-redux
   npm install @reduxjs/toolkit

3. Inside "redux": Create a file "store.js"

4. Inside "store.js":
   import { configureStore } from '@reduxjs/toolkit';
   import todoReducer from './todoSlice'

export default configureStore({
reducer: {
todos: todoReducer,
}
})

5.  Inside "redux": Create a file "todoSlice.js"
    5.1
    import { createSlice } from '@reduxjs/toolkit';

        5.2 Creatte the slice function which requires (name, initialState, reducers). The action executed by the event handler are written inside the reducers.

        const todoSlice = createSlice({
        name: 'todos',
        initialState: [
        { id: 1, title: 'todo 1', completed: false },
        { id: 2, title: 'todo 2', completed: false },
        { id: 3, title: 'todo 3', completed: true },
        ],
        reducers: {
        addTodo: (state, action) => {
        },
        )};

        5.3 Export the action:
        export const { addTodo } = todoSlice.actions;

            export default todoSlice.reducer;

6.  src/TodoList.js:
    Create a constant that contains the array of the State by using useSelector(lin 6)
    const todos = useSelector(state => state.todos);

7.  Add reducer for adding input. src/redux/todoSlice.js:
    (lin 11 - 18)
    addTodo: (state, action) => {
    const newTodo = {
    id: Date.now(),//This create unique ids based in the current time
    title: action.payload.title,
    completed: false
    };
    state.push(newTodo);
    },

8.  eventHandler to add new items to the list. src/AddTodoForm.js
    8.1 Import useDispatch and the addTodo(this is the function to add the items):
    import { useDispatch } from 'react-redux';
    import { addTodo } from '../redux/todoSlice';

8.2 Call the dispatch function:
const dispatch = useDispatch();

8.3 Create the submit function to attach to the button:
const onSubmit = (event) => {
event.preventDefault();
console.log('user entered: ' + value);
dispatch(addTodo({
title: value,
}));
setValue('');//this delete the entered input once we submit
};
8.4 Add the eventListener to the button:

<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>

9. Add reducer to change the state (completed). src/redux/todoSlice.js:
   9.1 create the reducer "toggleCompleted". (lin 19 - 24)
   toggleCompleted: (state, action) => {
   const index = state.findIndex(
   todo => todo.id === action.payload.id
   );
   state[index].completed = action.payload.completed;
   },
   9.2 Add the "toggleCompleted" to the the distressed exported actions:
   export const { addTodo, toggleCompleted } = todoSlice.actions;

10. Add eventHandler to change the state. src/TodoItems.js:
    10.1 - Create the function for the eventhandler(lin 8 - 14):
    const handleCompleteClick = () => {
    dispatch(toggleCompleted({
    id: id,
    completed: !completed
    }));
    console.log("changed state", title)
    }
    10.2 - Add the evendHandler to the input (lin 28)
    onChange={handleCompleteClick}>

11. Reducer to delete selected item. src/redux/todoSlice.js:
    11.1 create the reducer "deleteTodo". (lin 25 - 27)
    deleteTodo: (state, action) => {
    return state.filter(todo => todo.id !== action.payload.id);
    }
    11.2 Add the "deleteTodo" to the the distressed exported actions:
    export const { addTodo, toggleCompleted, deleteTodo } = todoSlice.actions;

12. Add eventHandler to delete items. src/TodoItems.js:

12.1 Create the function:
const handleDeleteClick = () => {
console.log("clicked!")
dispatch(deleteTodo({ id }));
}
12.2 Add the event to the button:
<button onClick={handleDeleteClick} className='btn btn-danger'>Delete</button>
