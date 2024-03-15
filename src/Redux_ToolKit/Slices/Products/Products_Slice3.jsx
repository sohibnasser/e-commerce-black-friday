import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts3 = createAsyncThunk("Products_Slice3/fetchProducts3" , async () => {
    const res = await axios.get("https://dummyjson.com/products/category/womens-dresses") ;
    return res.data ;
    
} ) ;

const Products_Slice3 = createSlice({
    initialState: [] ,
    name : "Products_Slice3" ,
    reducers : {},

    extraReducers : (builder) => {
        builder.addCase(fetchProducts3.fulfilled , (state , action) =>{
            return action.payload ;
        })
    }
})

export const { } = Products_Slice3.actions ;

export default Products_Slice3.reducer ;