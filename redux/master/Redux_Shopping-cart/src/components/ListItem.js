import { useDispatch } from "react-redux";
import { addGroceryItemToCart } from "../redux/cartSlice";

function ListItem({ item, title }) {
    const dispatch = useDispatch();

    const addToCar = () => {
        console.log("item in component:", title)
        dispatch(addGroceryItemToCart({
            title: title,
        }));
    }
    return (
        <li
            key={item.id}
            className="list-item"
            onClick={() => addToCar(title)}
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