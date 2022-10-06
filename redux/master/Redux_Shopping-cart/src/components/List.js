import React from "react";
import ListItem from "./ListItem.js";

const List = ({ items }) => {
    return (
        <div>
            <ul className="app-list">
                {items.map((item) => (
                    <ListItem
                        key={item.id}
                        item={item}
                        title={item.title}
                    />
                ))}
            </ul>
        </div>
    );
}

export default List;