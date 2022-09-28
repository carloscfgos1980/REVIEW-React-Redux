import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';




// ACTION INCREMENT
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

// REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state += 1;
    case "DEC":
      return state -= 1;
  }

}

//STORE -> GLOBALIZE STATE
let store = createStore(counter);

// DISPLAY IT ON THE CONSOLE
store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment());
store.dispatch(decrement());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


