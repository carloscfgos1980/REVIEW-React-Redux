## React Redux Todo App Tutorial | Learn Redux with Redux Toolkit (part I)

From min 29 of tutorial video
https://www.youtube.com/watch?v=fiesH6WU63I

1. Make the fake API works. In the file api that is outside the app, for some reason, we do the following steps:
   1.1 - cd api
   1.2 - npm install
   1.3 - npm run server

- If it works we should get the following message:
  Server running on port 7000.
  We should check that works fine by using PostMAn or just check ('http://localhost:7000/todos') in google chrome.
  N: There are other methods to create a fake API. I prefer The-Net-Ninja's method.

\*\*\* Ojo. I got this error message. It is because the use an old version of node. To solve this we need to install npm again.
Error: Objects are not valid as a React child (found: object with keys {title}). If you meant to render a collection of children, use an array instead.

2.  src/redux/todoSlice.js: GET the API in the store
    2.1 - Create the function to call the API "getTodosAsync". We use the GET method. (lin 3 -12)
    2.2 - Create the extraReducers.
    2.3 - Create the reducer for to getting the DATA:

    [getTodosAsync.fulfilled]: (state, action) => {
    return action.payload.todos;
    },

    2.4 - src/components/TodoList.js: GET the API inside the App.
    2.4.1 - Call the dispatch method.
    2.4.2 - Call the useEffect method.
    2.4.3 - Replace "getTodos" with "getTodosAsync". Everythin should look like follow:

        const dispatch = useDispatch();
        useEffect(() => {
        	dispatch(getTodosAsync())
        }, [dispatch])

3.  src/redux/todoSlice.js: POST data in the API from the store.
    3.1 - Create the function to call the API "addTodoAsync". We use the GET method. (lin 14 -30)
    3.2 - Create the reducer in order to POST the DATA (new todo-task):

    [addTodoAsync.fulfilled]: (state, action) => {
    state.push(action.payload.todo);
    },

    N: Same method that with the reducer but simplier coz with the API we dont need to provide the id or the complete status. The API do that automatically for us.

    3.3 - src/components/TodoForm.js: POST in the API from the App.
    3.3.1 - Call the dispatch method.
    3.3.2 - Call the useEffect method.
    3.3.3 - Replace "addTodos" with "addTodoAsync". Everythin should look like follow:

        	const dispatch = useDispatch();

    const onSubmit = (event) => {
    event.preventDefault();
    console.log('user entered: ' + value);
    dispatch(addTodoAsync({
    title: value,
    }));
    setValue('');
    };

4.  src/redux/todoSlice.js: PATCH data (change the state) in the API from the store.
    4.1 - Create the function to call the API "toggleCompleteAsync". We use the GET method. (lin 32 -48).
    4.2 - Create the reducer in order to PATCH the DATA (change the state):

            [toggleCompleteAsync.fulfilled]: (state, action) => {
                const index = state.findIndex(
                    (todo) => todo.id === action.payload.todo.id
                );
                state[index].completed = action.payload.todo.completed;
            },

N: Same method that with the reducer.

4.3 src/components/TodoItem.js: PATCH in the API from the App.
4.3.1 - Call the dispatch method.
4.3.2 - Call the useEffect method.
4.3.3 - Replace "addTodos" with "addTodoAsync". Everythin should look like follow:

    const dispatch = useDispatch();
    const handleCompleteClick = () => {
    	dispatch(toggleCompleteAsync({
    		id,
    		completed: !completed
    	}));
    	console.log("changed state", title)
    }

5.  src/redux/todoSlice.js: DELETE data in the API from the store.
    5.1 - Create the function to call the API "deleteTodoAsync". We use the GET method. (lin 50 - 61).
    5.2 - Create the reducer in order to DELETE the DATA:

         [deleteTodoAsync.fulfilled]: (state, action) => {
             return state.filter((todo) => todo.id !== action.payload.id);
         },

    N: Same method that with the reducer.

    5.3 - src/components/TodoItem.js: DELETE in the API from the App.
    N: We already imported dispatch and useEffect for this file.
    Replace "deleteTodo" with "deleteTodoAsync". Everythin should look like follow:

    const handleDeleteClick = () => {
    console.log("clicked!")
    dispatch(deleteTodoAsync({ id }));
    }

    FIN!

    NOTE: This method will probably soon be decapricated so I will not learn it by heart. The dynamic is to create a function to communicate with the API, the an extrareducer that will have the same logic of the correspondent reducer and then update the function name when we dispatch an action.
    All this when we are transforming the app with no API to app with API.
    Once we have built all the functionability with API, re can delete or comment the reducers coz the are not longer used.
    If we create the function directly to work with an API then we have to write all the codes from scratch.
