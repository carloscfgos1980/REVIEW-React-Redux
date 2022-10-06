import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/cartSlice";
import List from "./List";

function ShoppingCart({ cart }) {
    const dispatch = useDispatch();
    const empty = () => {
        console.log("clicked empty")
        dispatch(emptyCart());
    }
    return (
        <div className="shopping-cart">
            <h2>Shopping cart</h2>
            <button onClick={empty} >Empty the shopping cart</button>
            <List items={cart} />
        </div>
    );
}

export default ShoppingCart;