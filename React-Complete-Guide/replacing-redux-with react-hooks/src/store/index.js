import {configureStore} from "@reduxjs/toolkit"
import productSlice from "./product-slice"

const store = configureStore({
    reducer:  {productSlice}
})

export default store