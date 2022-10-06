import { useSelector } from "react-redux";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

const Container = () => {

    const grocery = useSelector(state => state.grocery);

    const cart = useSelector(state => state.cart);

    return (
        <div className="container">
            <header>
                <h1>Grocery List</h1>
            </header>
            <main>
                <GroceryList
                    grocery={grocery}
                />
                <ShoppingCart
                    cart={cart}
                />
            </main>
        </div>
    );
}

export default Container;

   // const [grocery, setGrocery] = useState([
    //     { id: 1, title: "Eggs" },
    //     { id: 2, title: "Cheese" },
    //     { id: 3, title: "Garlic" },
    // ])
    // const [cart, setCart] = useState([
    //     { id: 1, title: "Onions", amount: 1 },
    //     { id: 2, title: "Leeks", amount: 2 },
    // ])

    // const addItemToGrocery = (title) => {
    //     let newGrocery = [
    //         ...grocery,
    //         {
    //             id:
    //                 grocery.length +
    //                 cart.length +
    //                 1,
    //             title: title,
    //         },
    //     ]
    //     setGrocery(newGrocery)
    // };


    // const addAmountToItem = (item) => {
    //     let existingtItems = cart.map((listItem) => {
    //         if (listItem.title === item.title) {
    //             {
    //                 listItem.amount = listItem.amount + 1
    //             };
    //         }
    //         console.log("List Items", listItem)
    //         return listItem;
    //     });

    //     setCart(existingtItems)
    // };

    // const addGroceryItemToCart = (item) => {
    //     console.log(`addGroceryItemToCart: ${item.title}`);
    //     if (
    //         cart
    //             .map((item) => item.title)
    //             .includes(item.title)
    //     ) {
    //         addAmountToItem(item);
    //     } else {

    //         let newItemCar = [
    //             ...cart,
    //             {
    //                 id: cart.length + 1,
    //                 title: item.title,
    //                 amount: 1,
    //             },
    //         ]
    //         console.log("new Item Car", newItemCar)
    //         setCart(newItemCar)
    //     }
    // };

    // const emptyCart = () => {
    //     setCart([]);
    // };