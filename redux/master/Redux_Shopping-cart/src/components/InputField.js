import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/grocerySlice";

function InputField() {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const onButtonPress = () => {
        if (input.length > 0) {
            console.log(`Submitting ${input}`);
            dispatch(addItem({
                title: input,
            }));
            setInput("");
        }
    }

    return (
        <div className="input-field">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={onButtonPress} placeholder="Add a grocery item" >
                Add
            </button>
        </div>
    );
}

export default InputField;