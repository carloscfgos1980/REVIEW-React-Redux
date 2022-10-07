6. #39 - Setting up Redux in React

https://www.youtube.com/watch?v=f87wPQMgF4c&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=39

6.1 In the terminal, type:
npm install redux react-redux

6.2 In file Index.js:
Import Redux library
import { createStore } from 'redux';

6.3 In file Index.js:
Import React-Redux in order to connect Redux with React thru the Provider function.
import { Provider } from 'react-redux';

6.4 In file Index.js:
Create store
const store = createStore();

6.5 In file Index.js:
Wrap de store around the app

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

6.6 Inside src folder, create a folder named "reducers".

6.7 Inside folder reducers, create a file "rootReducers.js"

6.8 in rootReducers.js:
\*Create an empty initial state of post
const initState = {
post: []
}

- This function always take two parameters, state (initial( and action.
  const rootReducers = (state = initState, action)=>{
  return state;
  }

  6.9 in rootReducers.js. Export de function:
  export default rootReducer

  6.10 in index.js. Import de reducer by:
  import rootReducer from './reducers/rootReducer'

  6.11 Asociate the reducer with the "createStore", like this:
  const store = createStore(rootReducer);
