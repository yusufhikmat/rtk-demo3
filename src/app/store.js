import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from '../feature/cake/cakeSlice';
import postReducer from '../feature/post/postSlice'

export const store = configureStore({
    reducer:{
        cake:cakeReducer,
        post:postReducer
    }  
    
})