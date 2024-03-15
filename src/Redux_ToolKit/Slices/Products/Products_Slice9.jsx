import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts9 = createAsyncThunk("Products_Slice9/fetchProducts9" , async () => {
    const res = await axios.get("https://dummyjson.com/products/category/tops") ;
    return res.data ;
    
} ) ;

const Products_Slice9 = createSlice({
    initialState: [] ,
    name : "Products_Slice9" ,
    reducers : {},

    extraReducers : (builder) => {
        builder.addCase(fetchProducts9.fulfilled , (state , action) =>{
            return action.payload ;
        })
    }
})

export const { } = Products_Slice9.actions ;

export default Products_Slice9.reducer ;