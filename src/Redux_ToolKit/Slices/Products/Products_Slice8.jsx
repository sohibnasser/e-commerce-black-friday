import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts8 = createAsyncThunk("Products_Slice8/fetchProducts8" , async () => {
    const res = await axios.get("https://dummyjson.com/products/category/womens-bags") ;
    return res.data ;
    
} ) ;

const Products_Slice8 = createSlice({
    initialState: [] ,
    name : "Products_Slice8" ,
    reducers : {},

    extraReducers : (builder) => {
        builder.addCase(fetchProducts8.fulfilled , (state , action) =>{
            return action.payload ;
        })
    }
})

export const { } = Products_Slice8.actions ;

export default Products_Slice8.reducer ;