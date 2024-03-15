import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts6 = createAsyncThunk("Products_Slice6/fetchProducts6" , async () => {
    const res = await axios.get("https://dummyjson.com/products/category/womens-jewellery") ;
    return res.data ;
    
} ) ;

const Products_Slice6 = createSlice({
    initialState: [] ,
    name : "Products_Slice6" ,
    reducers : {},

    extraReducers : (builder) => {
        builder.addCase(fetchProducts6.fulfilled , (state , action) =>{
            return action.payload ;
        })
    }
})

export const { } = Products_Slice6.actions ;

export default Products_Slice6.reducer ;