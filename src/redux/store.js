import { configureStore } from "@reduxjs/toolkit"
import listReducer from "./todosSlice.js"


export const store = configureStore({

    reducer: {
        lista: listReducer
    }

})