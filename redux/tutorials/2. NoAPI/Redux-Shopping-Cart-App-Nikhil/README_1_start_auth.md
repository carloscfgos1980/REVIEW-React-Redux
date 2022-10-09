## Redux ShoppingCart-app with no API

Watch the tutorial from min 24 till 1:08 hr
https://www.youtube.com/watch?v=zrs7u6bdbUw

## Steps:

0. Clean the app. Same as other react app "cleanning". DO NOT DELETE App.css coz it will add extra margin.
   N: In this app, the style are not defined in App.css as usual, instead the style is applied in separately .css files that are attached to the components.

## 1. Create functionality to Log in

## 2. Log out functionability

1. Download the setup app from:
   https://github.com/Nikhilthadani/Redux-Shopping-Cart-App
   N: Check for starting app.

2. npm install

3. Create the auth-slice in the store folder. Check src/store/auth-slice.
   N: Other developers prefer to label this folder as redux.
   In this case inside redux there is a file named index.js. Other developers name this very same file store and redux to the folder that contains it.
   Nikhil uses "auth-slice" but most of the people would use camel notation so it would be like "authSlice".
   Nijhil also doesnt use the distress method on the export actions. Explanation in "src/store/auth-slice.js" and "src/store/index.js"

3.1 - Create reducer "login".
3.2 - Create reducer "logout".
3.3 - Export actions. There are 2 ways of doing this. Explanation in auth-slice.js:
export const authActions = authSlice.actions;

3.4 Export this slice (configurestore)
export default authSlice;

4. src/store/index.js: Create the store from the configureStore.

5. src/index.js:
   5.1 - Import Provider from react-redux.
   5.2 - Import store.
   5.3 - Wrap the Provider around the app.

6. src/components/Auth.js:
6.1 - Creathe the eventHandler to submit the action:
<form onSubmit={handleSubmit}>

6.2 - Import useDispatch

6.3 - Create the function "handleSubmit". Checkout notes in this file

## 2. Log out functionability

1. src/components/Header.js: "
1.1 - Create a button inside the list:
   <li>
   <button className="logout-btn">Logout</button>
   </li>
1.2 - Create the eventHandler attached to the button
<button onClick={logoutHandler} className="logout-btn">Logout</button>

1.3 - Create constanst "dispatch" and call "useDispatch"
const dispatch = useDispatch();

1.4 Create function "logoutHandler" ( lin 8 - 10)

2. Style the button:
   src/components/Layout.css (lin 13 - 20)
