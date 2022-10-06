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

5.  src/redux: Create a file "grocerySlice.js"

6.  src/redux: Create a file "cartSlice.js"

7.  Elements of the Store. Check src/redux/store.js

8.  src/redux/grocerySlice.js: Create reducer to add items from the input.

9.  src/redux/cartSlice.js: Create 2 reducers

- Add Items to the cart.
  N: This was very complicated. I had a bug because I was using "action.payload" instead of "action.payload.title". This function check if the item already exist. If it is true then just increase the amount. If it doesnt exist, it will add it to the list

- Delete all the elements from the cart.
  N: It is very simple but it wasn't working coz I didnt "return" the state.

10. src/components/Container.js: Import store. In this case there are two Slice store. Checkout src/redux/store.js
    const grocery = useSelector(state => state.grocery);
    const cart = useSelector(state => state.cart);

11. src/components/inputFields.js: Create eventHandler to add the input value to the ListItems

12. src/components/ListItems.js: EventHandler to add items from the ListITems to "cart".

13. src/components/ShoppingCart.js: EventHandler attach to the button in order to delete all the items from the cart.

FIN.
