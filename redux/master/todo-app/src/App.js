import './App.css';
import { useSelector } from "react-redux";
import TodoItems from "./components/TodoItems"
import React from "react";


const App = () => {
  const todos = useSelector(state => state.todos);
  //console.log("new state", todos)
  //const [todos, setTodos] = useState(todosData);

  // const handleChange = id => {
  //   let updatedTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed;
  //     }
  //     return todo;
  //   });
  //   setTodos(updatedTodos);
  // };


  return (
    <div className="todo-list">
      <ul className='list-group'>
        {todos.map(todo => (
          <TodoItems key={todo.id} id={todo.id} title={todo.text} completed={todo.completed} />
        ))}
      </ul>
    </div>
  );
}


export default App;