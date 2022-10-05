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
    npm install react-icons --save
    npm install react-router-dom@5

2.  "Clean app". Delete all the files that are not needed.

3.  src: Create another folder named "redux"

4.  src/redux: Create a file "store.js"

5.  src/redux: Create a file "todoSlice.js"

6.  src/index.js:
    6.1 - Import store:
    import store from './redux/store';
    6.2 - Import provider
    import { Provider } from 'react-redux';
    6.3 - Wrap the Provider around the App so the whole app has access to the store:

        <Provider store={store}>
          <App />
        </Provider>

N: Aqui tuve un bug que me tuvo ocupado por una hora. No puedp copiar el index.js de otras app outdated!

7. Elements of the Store. Check src/redux/store.js

8. Create the CongifureSlice(TodoSlice). Several steps:
