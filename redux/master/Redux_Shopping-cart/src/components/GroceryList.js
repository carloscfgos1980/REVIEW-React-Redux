import InputField from "./InputField.js";
import List from "./List.js";

function GroceryList({ grocery }) {
    return (
        <div className="grocery-list">
            <h2>Shopping list</h2>
            <InputField />
            <List items={grocery} />
        </div>
    );
}

export default GroceryList;