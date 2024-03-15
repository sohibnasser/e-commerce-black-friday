import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts7 = createAsyncThunk("Products_Slice7/fetchProducts7" , async () => {
    const res = await axios.get("https://dummyjson.com/products/category/mens-shirts") ;
    return res.data ;
    
} ) ;

const Products_Slice7 = createSlice({
    initialState: [] ,
    name : "Products_Slice7" ,
    reducers : {},

    extraReducers : (builder) => {
        builder.addCase(fetchProducts7.fulfilled , (state , action) =>{
            return action.payload ;
        })
    }
})

export const { } = Products_Slice7.actions ;

export default Products_Slice7.reducer ;