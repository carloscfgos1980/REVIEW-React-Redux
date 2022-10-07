import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        INC: (state) => {
            state.count += 1
        },
        DEC: (state) => {
            state.count -= 1
        },
        INC_AMOUNT: (state, action) => {
            state.count += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { INC, DEC, INC_AMOUNT } = counterSlice.actions

export default counterSlice.reducer