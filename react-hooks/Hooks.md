## Hooks

## Changes from class-based components to hooks
1. class App extends React.Component is not longer used, just an arrow function.
2. functions like constructor, super and render are not longer needed.
3. this.state is not longer needed, instead is implemented useState. So not more this.props are need also. and the functions are not longer required to be binded to the constructor().
4. The handlechange functions has to be turned into a arrow function.
## Apps:
## Clean up the new react app.
   * Delete 5 files: setupTests.js, App.tests.js, logo.svg, serviceWorkers.js, index.css.
   * Inside App.js:
   - Delete everything inside <div ClassName = "App">
   - Delete import Logo.

    * Inside Index.js:
   - delete all the commnted message and serviceWorker.unregister().
   - delete import serviceWorker.
   - delete import ./index.css.
   
 
  
