import { configureStore } from "@reduxjs/toolkit";
import expReducers from './expSlice'

export default configureStore({
    reducer:{
        "exp":expReducers
    }
})