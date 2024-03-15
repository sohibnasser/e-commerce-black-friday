import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts2 = createAsyncThunk("Products_Slice2/fetchProducts2" , async () => {
    const res = await axios.get("https://dummyjson.com/products/category/mens-shoes") ;
    return res.data ;
    
} ) ;

const Products_Slice2 = createSlice({
    initialState: [] ,
    name : "Products_Slice2" ,
    reducers : {},

    extraReducers : (builder) => {
        builder.addCase(fetchProducts2.fulfilled , (state , action) =>{
            return action.payload ;
        })
    }
})

export const { } = Products_Slice2.actions ;

export default Products_Slice2.reducer ;