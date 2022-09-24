import React from "react";
import ListItem from "./ListItem.js";

const List = ({ items, addGroceryItemToCart }) => {
    return (
        <div>
            <ul className="app-list">
                {items.map((item) => (
                    <ListItem
                        key={item.id}
                        item={item}
                        addGroceryItemToCart={addGroceryItemToCart}
                    />
                ))}
            </ul>
        </div>
    );
}

export default List;