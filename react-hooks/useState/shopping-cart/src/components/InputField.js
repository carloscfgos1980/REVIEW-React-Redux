import { useState } from "react";

function InputField({ addItemToGrocery }) {
    const [input, setInput] = useState("");



    const onButtonPress = () => {
        if (input.length > 0) {
            console.log(`Submitting ${input}`);
            addItemToGrocery(input);
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