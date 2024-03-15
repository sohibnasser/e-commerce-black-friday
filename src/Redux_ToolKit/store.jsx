import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import Cart_Slice from "./Slices/Cart_Slice";
import Products_Slice1 from "./Slices/Products/Products_Slice1";
import Products_Slice2 from "./Slices/Products/Products_Slice2";
import Products_Slice3 from "./Slices/Products/Products_Slice3";
import Products_Slice4 from "./Slices/Products/Products_Slice4";
import Products_Slice5 from "./Slices/Products/Products_Slice5";
import Products_Slice6 from "./Slices/Products/Products_Slice6";
import Products_Slice7 from "./Slices/Products/Products_Slice7";
import Products_Slice8 from "./Slices/Products/Products_Slice8";
import Products_Slice9 from "./Slices/Products/Products_Slice9";


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }


const reducer = combineReducers({
    products : Products_Slice1 ,
    products2 : Products_Slice2 ,
    products3 : Products_Slice3 ,
    products4 : Products_Slice4 ,
    products5 : Products_Slice5 ,
    products6 : Products_Slice6 ,
    products7 : Products_Slice7 ,
    products8 : Products_Slice8 ,
    products9 : Products_Slice9 ,
    cart : Cart_Slice ,
    // Necklaces : Necklaces_Slice ,
    // Bracelets : Bracelets_Slice ,
    // Earings : Earings_Slice ,
    // Rings : Rings_Slice ,
    // Watches : Watches_Slice ,
})



const persistedReducer = persistReducer(persistConfig, reducer)



export const store = configureStore({
    reducer : persistedReducer
})