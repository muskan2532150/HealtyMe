import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers';
import CardSliceReducer from "./CardSlice";

const store = configureStore({
    card: CardSliceReducer,
})

export default store