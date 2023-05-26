import { configureStore } from "@reduxjs/toolkit";
import CardSliceReducer from "./CardSlice";

const store = configureStore({
    reducer: {
    card: CardSliceReducer,
    },
})

export default store