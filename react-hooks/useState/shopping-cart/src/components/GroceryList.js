import InputField from "./InputField.js";
import List from "./List.js";

function GroceryList({ grocery, addItemToGrocery, addGroceryItemToCart }) {
    return (
        <div className="grocery-list">
            <h2>Shopping list</h2>
            <InputField addItemToGrocery={addItemToGrocery} />
            <List items={grocery} addGroceryItemToCart={addGroceryItemToCart} />
        </div>
    );
}

export default GroceryList;