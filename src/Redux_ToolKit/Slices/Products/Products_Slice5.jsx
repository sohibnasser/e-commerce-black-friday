import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts5 = createAsyncThunk("Products_Slice5/fetchProducts5" , async () => {
    const res = await axios.get("https://dummyjson.com/products/category/womens-watches") ;
    return res.data ;
    
} ) ;

const Products_Slice5 = createSlice({
    initialState: [] ,
    name : "Products_Slice5" ,
    reducers : {},

    extraReducers : (builder) => {
        builder.addCase(fetchProducts5.fulfilled , (state , action) =>{
            return action.payload ;
        })
    }
})

export const { } = Products_Slice5.actions ;

export default Products_Slice5.reducer ;