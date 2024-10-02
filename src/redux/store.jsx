import { configureStore } from "@reduxjs/toolkit";




export const store = configureStore({
    app: appReducer,
    product: productReducer,
    basket: basketReducer,
})