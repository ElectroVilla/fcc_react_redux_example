// import { createStore } from "redux";
import {configureStore, createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        add: (state, action) => {
            state.counter += action.payload;
        },
        reset: (state) => {
            state.counter = 0;
        }
    }
});

const store = configureStore({ reducer: counterSlice.reducer });

// const reducer = (state = {counter: 17}, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//         return { ...state, counter: state.counter + 1 };
//         case "DECREMENT":
//         return { ...state, counter: state.counter - 1 };
//         case "ADD":
//         return { ...state, counter: state.counter + action.payload };
//         case "RESET":
//         return { ...state, counter: 0 };
//         default:
//         return state;
//     }
// }

// const store = configureStore({ reducer, devTools: true });

export const { increment, decrement, add, reset } = counterSlice.actions;
// export const actions = counterSlice.actions;
export default store;
