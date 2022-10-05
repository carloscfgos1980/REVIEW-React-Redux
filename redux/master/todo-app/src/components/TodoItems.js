import React from "react"
import { useDispatch } from "react-redux";
import { toggleCompleted } from "../redux/todoSlice";

const TodoItems = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handleCompleteClick = () => {
        //console.log("id", id);
        dispatch(toggleCompleted(id));
        //console.log("changed state", title)
    }

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div>

            <div className="todo-items" >
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleCompleteClick(id)} />
                <p style={completed ? completedStyle : null}>{title}</p>
            </div>
        </div>
    )
}

export default TodoItems