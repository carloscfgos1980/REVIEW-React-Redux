function ListItem({ item, addGroceryItemToCart }) {
    return (
        <li
            key={item.id}
            className="list-item"
            onClick={() => addGroceryItemToCart(item)}
            value={item.title}
        >
            <div>{item.title}</div>
            {item.amount && (
                <div className="item-amount">Amount: {item.amount}</div>
            )}
        </li>
    );
}

export default ListItem;