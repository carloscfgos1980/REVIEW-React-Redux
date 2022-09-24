

import React, { useState } from "react"
import TodoItems from "./TodoItems"
import todosData from "./todosData"

const App = () => {
    // class App extends React.Component {
    const [todos, setTodos] = useState(todosData);
    // All this shit of contructor, super, this state is decapocrated, instead is the useState like above


    //     constructor() {
    //         super()
    //         this.state = {
    //             todos: todosData
    //         }
    //         this.handleChange = this.handleChange.bind(this)
    //     }

    const handleChange = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    // with hooks this is the way of creating a function to change state, like the functioin above.

    // handleChange(id) {
    //     this.setState(prevState => {
    //         const updatedTodos = prevState.todos.map(todo => {
    //             if (todo.id === id) {
    //                 return {
    //                     ...todo,
    //                     completed: !todo.completed
    //                 }
    //             }
    //             return todo
    //         })
    //         return {
    //             todos: updatedTodos
    //         }
    //     })
    // }


    return (
        <div className="todo-list">
            <TodoItems todos={todos} handleChange={handleChange} />
        </div>
    )
}

// Rendenr is not longer needed. Just return like above

/*
    render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}
}
*/

export default App