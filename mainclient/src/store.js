import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./Pages/login/loginSlice";


const store = configureStore({
    reducer:{
        user: loginReducer,
        
    },
});

export default store;