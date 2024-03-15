import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { addToCart, decrementProduct, deleteFromCart } from "../../Redux_ToolKit/Slices/Cart_Slice";
import { fetchProducts } from "../../Redux_ToolKit/Slices/Products/Products_Slice1";
import { fetchProducts2 } from "../../Redux_ToolKit/Slices/Products/Products_Slice2";
import { fetchProducts3 } from "../../Redux_ToolKit/Slices/Products/Products_Slice3";
import { fetchProducts4 } from "../../Redux_ToolKit/Slices/Products/Products_Slice4";
import { fetchProducts5 } from "../../Redux_ToolKit/Slices/Products/Products_Slice5";
import { fetchProducts6 } from "../../Redux_ToolKit/Slices/Products/Products_Slice6";
import { fetchProducts7 } from "../../Redux_ToolKit/Slices/Products/Products_Slice7";
import { fetchProducts8 } from "../../Redux_ToolKit/Slices/Products/Products_Slice8";
import { fetchProducts9 } from "../../Redux_ToolKit/Slices/Products/Products_Slice9";
import "./style.css";

export default function ProductsCart() {

  const cart = useSelector(state => state.cart) ;

  const dispatch = useDispatch() ;

  useEffect(() => {
    dispatch(fetchProducts())
  },[])
  
  useEffect(() => {
    dispatch(fetchProducts2())
  },[])
  
  useEffect(() => {
    dispatch(fetchProducts3())
  },[])
  
  useEffect(() => {
    dispatch(fetchProducts4())
  },[])
  
  useEffect(() => {
    dispatch(fetchProducts5())
  },[])
  
  useEffect(() => {
    dispatch(fetchProducts6())
  },[])
  
  useEffect(() => {
    dispatch(fetchProducts7())
  },[])
  
  useEffect(() => {
    dispatch(fetchProducts8())
  },[])
  
  useEffect(() => {
    dispatch(fetchProducts9())
  },[])


  const totalPrice = cart.reduce((total , product) => {
      total += product.quantity * product.price ;
      return total ;
  } , 0)


  return (
    <Container>

      <div className= "productsCartWrapper">

        <div className= "title">

          <h2>My Products</h2>
          <Link style={{ position : "absolute" , right : "0" , color : "rgb(191,42,69)" }} to="/">Continue shopping</Link>

        </div>

        <Table style={{ textAlign : "center" , borderColor : "black"}}>
      <thead>
        <tr>
          <th>IMAGE</th>
          <th>DESCRIPTION</th>
          <th>QUANTITY</th>
          <th>TOTAL</th>
          
        </tr>
      </thead>
      <tbody>
        {cart.map((product) =>(
          <tr key={product.id}>
          
          <td><img className="td_img" src={product.thumbnail} alt="img"/></td>
          <td  className="td_Description">{product.description}</td>

          <td className="td_QUANTITY">

          <span className="span_QUANTITY">
            <span  onClick={()=> dispatch(addToCart(product))}>+</span>
            <span>{product.quantity} {product.quantity === 0 && dispatch(deleteFromCart(product))}</span>
            <span  onClick={()=> dispatch(decrementProduct(product))}>-</span>
          </span>

          <span  onClick={() => dispatch(deleteFromCart(product))}><FontAwesomeIcon icon={faTrash} style={{ fontSize : "22px" , color: "rgb(191,42,69" , cursor : "pointer" }} /></span>
          </td>
          
          <td style={{padding : "4% 0"}}>{(product.quantity * product.price).toFixed(2)} EGP</td>

         
        </tr>

        ))}
    
      </tbody>
    
    </Table>


  <div className="checkout">
      <div style={{marginRight : "4%"}}>Subtotal {totalPrice.toFixed(2)} EGP</div>
      <div style={{margin : "1% 2% 3% 0" , width : "70%"}}>Tax included Shipping calculated at checkout</div>
      <Link className="btn_checkout" to="/RegisterHere">Check Out</Link>
  </div>
  
    </div>
    </Container>
  )
}
