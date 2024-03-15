import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts4 = createAsyncThunk("Products_Slice4/fetchProducts4" , async () => {
    const res = await axios.get("https://dummyjson.com/products/category/womens-shoes") ;
    return res.data ;
    
} ) ;

const Products_Slice4 = createSlice({
    initialState: [] ,
    name : "Products_Slice4" ,
    reducers : {},

    extraReducers : (builder) => {
        builder.addCase(fetchProducts4.fulfilled , (state , action) =>{
            return action.payload ;
        })
    }
})

export const { } = Products_Slice4.actions ;

export default Products_Slice4.reducer ;