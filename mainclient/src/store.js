import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./Pages/login/loginSlice";
import categoryReducer from "./Pages/category/CategorySlice"
import productsReducer from "./Pages/products/ProductSlice"


const store = configureStore({
    reducer:{
        user: loginReducer,
        category: categoryReducer,
        products: productsReducer,
        
    },
});

export default store;