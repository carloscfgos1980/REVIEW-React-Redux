## Redux For Beginners | React Redux Tutorial (part I)

https://www.youtube.com/watch?v=CVpUuw9XSjY

1. import the tools we need from "redud" and "react-redux"
   import { createStore } from 'redux';
   import { Provider } from 'react-redux';

2. Wrap Provider around App. Lin 45 -51. This is just a setup and it has npt to be updated again.

<Provider store={store}>
  <App />
</Provider>

3. Create the Actions. This are function just with the name of the action:

const increment = () => {
return {
type: 'INC'
}
}

const decrement = () => {
return {
type: 'DEC'
}
}

4. Create the reducer (counter):

const counter = (state = 0, action) => {
switch (action.type) {
case "INC":
return state += 1;
case "DEC":
return state -= 1;
}
}

5. //STORE -> GLOBALIZE STATE
   let store = createStore(counter);

6. // DISPLAY IT ON THE CONSOLE
   store.subscribe(() => console.log(store.getState()));

7. // DISPATCH. This is what execute the action inside the reducer
   store.dispatch(increment());
   store.dispatch(decrement());
