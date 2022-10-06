import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [
        { id: 1, title: "Onions", amount: 1 },
        { id: 2, title: "Leeks", amount: 2 },
    ],
    reducers: {

        addGroceryItemToCart: (state, action) => {
            console.log("added to the store", action.payload)
            if (
                state
                    .map((item) => item.title)
                    .includes(action.payload.title)
            ) {
                console.log("existing item")
                let existingtItems = state.map((listItem) => {
                    if (listItem.title === action.payload.title) {
                        listItem.amount = listItem.amount + 1
                    }
                    console.log("List Items", listItem.amount)
                    return listItem;
                });
                state = existingtItems
            }
            let newItemCart =
            {
                id: Date.now(),//This create unique ids based in the current time
                title: action.payload.title,
                amount: 1

            };
            state.push(newItemCart);
        },
        emptyCart: (state, action) => {
            console.log("cart items deleted")
            return state = [];
        },
    }
});

export const { addGroceryItemToCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
