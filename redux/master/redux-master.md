## I converted 3 apps from useEffect to redux.

## 1. Redux_Setup-app
This is an starting point app for redux.

## 2. Todo-app.
This one was simple but took me a lot of time. 
2.1 - I could see the result in the DOM. The problem was in index.js. I copycat from another app and apparently is outdated so the solution is just to create a react app, then react-redux and redux-toolkit. All this is explained in the README.md. But I have saved the chances so I can just start with "Redux_Setup-app".

2.2 - I had to change the state (completed). It was also very difficult. 
I realized the action.payload it was actually the id that I passed in the useEffect app
Check out README.md for further explanation.


## 3. Redux_SongSaver-app
This one was surprisily not so hard. 
actions:
3.1 - Add song to the list
3.2 - Delete song from the list.

# 4 Redux_Shopping-cart
This was a bit difficult.
4.1 - Add item to the list. This was very easy, just the SongSAver-app, copy and adapt:
- reducer
- eventHandler

4.2 - Add item to the cart. Here I had a bug coz I was using "action.payload" instead of "action.payload.title".
I solved by console.log(action.payload). 
This was a complicated fucntion. In order to check that there was already an item and I just need to increase the amount. 

4.2.1 -I have to use "if else" method.

4.2.1.1 - if:
 I need to map the state(cart) and the use the filter "includes(action.payload.title)". This part took a me a lot of time to fig it out.
 
4.2.1.2 - then do:
Another mapping in the state(cart) to change the state.amount

4.2.2 else (it's implicit) display the function to add items to the cart. It is almost the same that adding item to the list, just and one element (amount).

4.3 - Delete all the items from the cart. 
N: This is a very simple function but I couldnt make it work because I missed the "return" infront state.








