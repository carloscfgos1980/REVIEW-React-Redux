## useState

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
   
 -------------------------------------------------------------------------------------------------------------------------------------
 
  
## Apps:
  
1.  NetNinja_blog-app (studying material)
N: Cool app to delete items from the list:
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
 -------------------------------------------------------------------------------------------------------------------------------------
  
2. react-todo-app-v1-master
N: Very cool app with a lot of "mieles".
  * method to obtain ids:
  id: Math.floor(Math.random() * 10000), // create a ramdom id with 10000 combinations, the chance of to equal ids be create is very small
  
  * Method to change state:
    const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
 -------------------------------------------------------------------------------------------------------------------------------------
  
  3. todo-app
  N: Converted from class-based componets to hooks. It was very useful the example in "react-todo-app-v1-master"
  
   -------------------------------------------------------------------------------------------------------------------------------------
  
  4. shopping-cart
  N: Check the functions:
  1. adding new items to the the list from an input field. (Container.js lin.16-28)
  2. Increasing the amount of an element in shopping cart. (Container.js lin. 31-43)
  3. Adding new elements to the shopping cart. This function includes the previos one. (Container.js lin.45-56)
  4. Empty cart. (Container.js lin.68-70)
  
     -------------------------------------------------------------------------------------------------------------------------------------
  5. songsaver-useState
  N: This was the assigment for React basics. I used the tools from the previos app.
  
