import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: {},
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategory: (state,action)=> {
            state.category = action.payload;
        }
    }
})

const {reducer, actions} = categorySlice;
export const {setCategory}= actions;
export default reducer;