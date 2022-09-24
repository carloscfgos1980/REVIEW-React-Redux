
import React from "react"

function TodoItems({ todos, handleChange }) {

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div>
            {todos.map((todo) => (
                <div className="todo-items" key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleChange(todo.id)}
                    />
                    <p style={todo.completed ? completedStyle : null}>{todo.text}</p>
                </div>
            ))}
        </div>
    )
}

export default TodoItems