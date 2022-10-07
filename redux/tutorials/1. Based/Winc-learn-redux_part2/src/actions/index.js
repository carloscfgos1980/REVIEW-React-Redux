export const increment = () => {
    return {
        type: 'INC'
    };
}

export const decrement = () => {
    return {
        type: 'DEC'
    };
}

export const incrementByAmount = (nr) => {
    return {
        type: 'INC_Amount',
        payload: nr
    };
}