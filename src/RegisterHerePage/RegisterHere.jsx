import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../Redux_ToolKit/Slices/Cart_Slice";
import { fetchProducts } from "../Redux_ToolKit/Slices/Products/Products_Slice1";
import { fetchProducts2 } from "../Redux_ToolKit/Slices/Products/Products_Slice2";
import { fetchProducts3 } from "../Redux_ToolKit/Slices/Products/Products_Slice3";
import { fetchProducts4 } from "../Redux_ToolKit/Slices/Products/Products_Slice4";
import { fetchProducts5 } from "../Redux_ToolKit/Slices/Products/Products_Slice5";
import { fetchProducts6 } from "../Redux_ToolKit/Slices/Products/Products_Slice6";
import { fetchProducts7 } from "../Redux_ToolKit/Slices/Products/Products_Slice7";
import { fetchProducts8 } from "../Redux_ToolKit/Slices/Products/Products_Slice8";
import { fetchProducts9 } from "../Redux_ToolKit/Slices/Products/Products_Slice9";
import NavbarComponant from "./Navbar/NavbarComponant";
import "./style.css";



export default function RegisterHere() {


  const [email, setEmail] = useState('');

  const cart = useSelector(state => state.cart) ;

  const dispatch = useDispatch() ;

  const totalPrice = cart.reduce((total , product) => {
      total += product.quantity * product.price ;
      return total ;
  } , 0)


const shippingPrice = totalPrice * (2/100) ;


const taxPrice = totalPrice * (3/100) ;


const checkoutPrice = (totalPrice + shippingPrice - taxPrice).toFixed(2) ;


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




return (

<>


    <Helmet>
      <title>Register</title>
      <meta name="description" content="Register Page" />
      {/* <link rel="canonical" href="/" /> */}
    </Helmet>



    <NavbarComponant />

    <Container>
      

      <section className="register-Here-Wrapper">

      <div className="container-CheckOut">
        <div className="card-CheckOut cart">
          <label className="title-CheckOut">CHECKOUT</label>
          <div className="steps">
            <div className="step">
              <div>
                <span>SHIPPING</span>
                <p>221B Baker Street, W1U 8ED</p>
                <p>London, United Kingdom</p>
              </div>
              <hr />
              <div>
                <span>PAYMENT METHOD</span>
                <p>Visa</p>
                <p>**** **** **** 4243</p>
              </div>
              <hr />
              <div className="form">
                <span>DO YOU HAVE AN E-MAIL ?</span>

                <form className="form">
                  <input
                    type="email"
                    placeholder="Enter Your E-mail"
                    required
                    className="input_field"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    
                  />
                  {/* {password.length < 8 &&<p className="error1">Password must be more than 8 char</p> } */}
                </form>
                
              </div>
              <hr />
              <div className="payments">
                <span>PAYMENT</span>
                <div className="details">
                  <span>Subtotal:</span>
                  <span>{totalPrice.toFixed(2)} EGP</span>
                  <span>Shipping:</span>
                  <span>{shippingPrice.toFixed(2)} EGP</span>
                  <span>Tax:</span>
                  <span>{taxPrice.toFixed(2)} EGP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-CheckOut checkout">
          <div className="footer">
            <label className="price">{checkoutPrice} EGP</label>

              {email !== ''?
            <button  onClick={() => dispatch(clear())} className="checkout-btn">Checkout</button>
              : <button className="checkout-btn">Checkout</button>
              }
          </div>
        </div>
      </div>





    <div className="checkout-table">
           
            <tbody className="checkout-table-body">
              {cart.map((product) =>(
                <tr key={product.id}>
                {/* <td><img className="checkout-table-img" src={imageOurproduct} alt="" /></td> */}
                <td><img className="checkout-table-img" src={product.thumbnail} /></td>
                <td className="checkout-table-Description">{product.description}</td>
                
                <td className="checkout-table-price">{(product.quantity * product.price).toFixed(2)} EGP</td>

              
              </tr>

              ))}
          
            </tbody>
          
    </div>



      </section>
    </Container>

    </>
  );
}
