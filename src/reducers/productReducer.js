import {createSlice} from '@reduxjs/toolkit'


const initialState = {value: ("")}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: { 

        collect: (state, action) => {
            state.value = action.payload
        }
    }


});

export const {collect} = productSlice.actions;