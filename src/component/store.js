import { configureStore } from "@reduxjs/toolkit";
import plusSlice from './plusSlice';

const store = configureStore({
    reducer:{
        add : plusSlice.reducer
    }
});

export default store;