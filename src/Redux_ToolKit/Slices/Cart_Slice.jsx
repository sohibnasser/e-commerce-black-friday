import { createSlice } from "@reduxjs/toolkit";

export const Cart_Slice = createSlice({
    initialState : [] ,
    name : "Cart_Slice" ,

    reducers : {
        
        addToCart : (state , action) => {
            const findProduct = state.find((product) => product.id === action.payload.id) ;
            if (findProduct){
                findProduct.quantity +=1 ;
            } else{
                const productClone = {...action.payload , quantity : 1}
                state.push(productClone)
            }} ,


            decrementProduct : (state , action) => {
                const findProduct = state.find((product) => product.id === action.payload.id) ;
                if (findProduct){
                    findProduct.quantity -=1 ;
                } else{
                    const productClone = {...action.payload , quantity : 0}
                    state.filter((product)=> product.id !== productClone.id)
                }} ,


        deleteFromCart : (state , action) => {
            return state.filter((product)=> product.id !== action.payload.id)
        } ,

        clear : (state , action) => {
            return []
        } ,
        
    }
})

export const { addToCart , deleteFromCart , decrementProduct , clear} = Cart_Slice.actions ;
export default Cart_Slice.reducer