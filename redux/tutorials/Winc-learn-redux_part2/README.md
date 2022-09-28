## Redux For Beginners | React Redux Tutorial (part II)

N: This way is astill a bit confusing and messing coz it has 3 files with the same name but it works at the end. This was a pain in the ass tutorial. I also have the feeling that is not going to be very useful in the future.

https://www.youtube.com/watch?v=CVpUuw9XSjY

1. import the tools we need from "redud" and "react-redux"
   import { createStore } from 'redux';
   import { Provider } from 'react-redux';

2. Wrap Provider around App. Lin 45 -51. This is just a setup and it has npt to be updated again.

<Provider store={store}>
  <App />
</Provider>

3. Inside folder "src": Create 2 folders:

- reducers
- actions

4. Inside folder "reducers": Create 3 files:

- counter.js
- isLogged.js
- index.js

5. Inside folder "actions": Create a file "index.js"

6. src/reducers/counter.js: Function with a swith method. This will contain the real actions to execute by the eventHandler. In this case. Adding and substracting. Ex:
   const counterReducer = (state = 0, action) => {
   switch (action.type) {
   case "INC":
   return state += 1;
   case "DEC":
   return state -= 1;
   case "INC_Amount":
   return state += action.payload;
   default:
   return state
   }
   }
   export default counterReducer;

N: Very important not forget the default in the swithc method. I was hours literally looking for this bug(error)

- INC_Amount gets a parameter (action.payload)

6. src/reducers/isLogged.js: Function with a swith method. This will contain the real actions to execute by the eventHandler. In this Case Log in/out. Ex:
   const loggedReducer = (state = false, action) => {
   switch (action.type) {
   case "SING_IN":
   return !state;
   default:
   return state
   }
   }
   export default loggedReducer;
   N: Very important not forget the default in the swithc method. I was hours literally looking for this bug(error)

7. src/reducers/index.js: Combine all reducers so it can be exported to index and then put inside the "store".
   7.1 Import the reducers.
   import counterReducer from "./counter";
   import loggedReducer from "./isLogged";

7.2 import the function "combineReducers" from 'redux':

import { combineReducers } from "redux";

7.3 Create the function for all the reducers:
const allReducers = combineReducers({
counter: counterReducer,
isLogged: loggedReducer
});

7.4 Export the function:
export default allReducers;

8. src/actions/index.js. In this file we are going to call the in the onClick event:

export const increment = () => {
return {
type: 'INC'
};
}

export const decrement = () => {
return {
type: 'DEC'
};
}

export const incrementByAmount = (nr) => {
return {
type: 'INC_Amount',
payload: nr
};
}

8. src/App.js:Create variable (const) that contains the state is the value we want to manipulate inside the store.
   We do that by invoking a function called useSelector
   N: we create the function that we name as we want and then as we type "useSel", we can just tab and it will automatically imported:
   import { useDispatch, useSelector } from "react-redux";

const counter = useSelector(state => state.counter);
const isLogged = useSelector(state => state.isLogged);

9. src/App.js: Create variable (const) "dispatch".
   We do that by invoking a function called useSelector
   N: we create the function that we name "dispatch" and then as we type "useDis", we can just tab and it will automatically imported. It will be added to the import of useSelector:

import { useDispatch, useSelector } from "react-redux";

const dispatch = useDispatch();

10. src/App.js: Create the layout inside return and the onClink event
    return (
      <div className="App">
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>

        {isLogged && <h3>Usefull information I shouldnt see</h3>}

      </div>
    );

11. In order to attach event to the buttons we need to call the actions. So for doing that we create an arrow function inside the onClick event and inside we invoke "dispatch" with the action (function) we wanna execute. Ex:

<button onClick={() => dispatch(increment())}>+</button>

N: Follow case is the same but then we pass a parameter to the action (function). This will be the value of the payload.
<button onClick={() => dispatch(incrementByAmount(5))}>+5</button>

N: If we check the source (src/reducers/counter) well see how this vale pass to the function.
case "INC_Amount":
return state += action.payload;

N: The name "incrementByAmount" is the name that we give to the function in "src/actions/index
export const incrementByAmount = (nr) => {
return {
type: 'INC_Amount',
payload: nr
};
}
