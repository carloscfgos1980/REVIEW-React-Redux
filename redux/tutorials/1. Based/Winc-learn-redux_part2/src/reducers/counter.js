// REDUCER
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INC":
            return state += 1;
        case "DEC":
            return state -= 1;
        case "INC_Amount":
            return state += action.payload;
        default:
            return state
    }
}

export default counterReducer;