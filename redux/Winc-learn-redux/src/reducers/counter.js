// REDUCER
const counterReducers = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - 1;
    }
};

export default counterReducers;