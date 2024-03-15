import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk("Products_Slice1/fetchProducts" , async () => {
    const res = await axios.get("https://dummyjson.com/products/category/mens-watches") ;
    return res.data ;
    
} ) ;

const Products_Slice1 = createSlice({
    initialState: [] ,
    name : "Products_Slice1" ,
    reducers : {},

    extraReducers : (builder) => {
        builder.addCase(fetchProducts.fulfilled , (state , action) =>{
            return action.payload ;
        })
    }
})

export const { } = Products_Slice1.actions ;

export default Products_Slice1.reducer ;