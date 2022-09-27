## useState

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
  
