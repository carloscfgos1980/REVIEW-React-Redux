## Redux ShoppingCart-app API

## There are two way of doing the API

- The reducer must be pure and side effect free and synchronous function always. If we have an HTTP call which is an asynchronous task to such type of code must not go through the reducer functions.
- We have to options to put the asynchronous code.

1. Inside the component using the useEffect hook like we can do inside "Product.js", when ever we are sending the data to the cart.
2. Create an action creator. This would allow us to run a asynchronous code

Watch the tutorial from 1:41 hr
https://www.youtube.com/watch?v=zrs7u6bdbUw

## reate an action creator

## STEPS:

0. Check the steps of the previos part

1. src.redux. Create a file "cart-actions.js"

2. Move the "sendDataCart" function from "cart-slide.js" to "cart-actions.js"

3. src/App.js: Create useEffect to Fetch Data
   3.1 Create and export the function that will contain the useEffec:
   export const fetchData = () => {

3.2 - return async (dispatch). Everything from above will be included in this function.
return async (dispatch) => {
3.3 - Create the asynchronous function. (lin 12 - 16)
const fectchHandler = async () => {

3.4 - Call the function with "try"method. (lin 11 - 14):
try {
const cartData = await fectchHandler();
dispatch(cartActions.replaceData(cartData))
}

4. src/redux/cart-actions.js: Dispatch the error notifications (dispatch(uiActions.showNotifications).

- After the API call (error). Inside the Catch (err) (lin 15 - 20)

N: Unlike the useEffect with "sendCartData". This one the dispatch notifications is applied only once since we are not sending any data, just fetching.

5. Decapricate the continuo looping
   5.1 src/redux/cart-slice.js: Create a new state
   changed: false,

5.2 Change the state when we add a new item (lin 19)
state.changed = true;
5.3 Change the state when remove from the cart(lin 41)
state.changed = true;

N: I Ihave a bug in src/redux/cart-slice.js (lin 36). When I try to update the state, like is in the tutorial. The amount totalQuantity keep increase in the API (backed end)
state.totalQuantity++;

I tried this instead:
state.totalQuantity = state.itemsList.length;

BUT it didnt work!
