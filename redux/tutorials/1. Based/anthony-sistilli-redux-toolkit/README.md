Redux Tutorial (with Redux Toolkit)

Hey gang, in this tutorial, Anthony will sow you how to get up and running with Redux using Redux Toolkit. Check out Anthony's YouTube channel for more React tutorials

https://www.youtube.com/watch?v=iBUJVy8phqw&t=3s

## STEPS:

1. Inside folder "src": Create another folder named "redux"

2. in the terminal:
   npm install redux react-redux
   npm install @reduxjs/toolkit

3. Inside "redux": Create a file "configureStore.js"

4. Inside "configureStore.js":
   import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
reducer: {},
});

5. Inside "Index.js": Import the store and the Provider
   import { store } from './redux/configureStore'
   import { Provider } from 'react-redux'

6. Inside "Index.js": Wrap the Provider around the app
   <Provider store={store}>
   <App />
   </Provider>,

7. Inside "redux: Create a file name "counter.js"

Copy the documentation from
https://redux-toolkit.js.org/tutorials/quick-start

The make a few variations like it is in counter.js

8. Inside "configureStore.js": Import counterSlice function from counter.js
   import counterReducer from './counter'

9. Inside "configureStore.js": Call that reducer and named as counter:
   export const store = configureStore({
   reducer: {
   counter: counterReducer
   },
   });

10. Inside "App.js": Get the reducer by using useSelector
    const { count } = useSelector((state) => state.counter);

11. Inside "App.js": Call useDispatch method
    const dispatch = useDispatch();
    N: in order to import "useDispatch" automatically we type "useDis". It will show the function and then keyboard "tab"

12. Inside "App.js": Create the dispacth function:

    const increment = () => dispatch(INC());
    const decrement = () => dispatch(DEC());

N: in order to importe "INC" automatically we type "INC". It will show the function and then keyboard "tab". Same method to import "DEC".

13. Inside "App.js": Create another button. lin 23

Inside "App.js": Create the dispacth function:
const incrementByAmount = () => dispatch(INC_AMOUNT(33));

N: in order to importe "INC_AMOUNT" automatically we type "INC_AMO". It will show the function and then keyboard "tab".
