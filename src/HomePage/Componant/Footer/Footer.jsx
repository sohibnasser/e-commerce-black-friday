import { CDBBox, CDBBtn, CDBIcon, CDBModalFooter } from 'cdbreact';
import React from 'react';
import { Link } from 'react-router-dom';
import photo from "./photo/Logo.png";
export default function Footer() {
  return (

    <div style={{boxShadow : "0px 0 10px black"}}>
    <CDBModalFooter style={{backgroundColor : "white"}} className="shadow">
      <CDBBox display="flex" flex="column" className=" mx-auto py-5" style={{ width: '80%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <Link to="/" style = {{ textDecorationColor : "rgb(188,156,79)" , display : "flex" , alignItems : "center" , padding : "0"}}>
              <img
                style={{width : "10rem"}}
                alt="logo"
                src={photo}
              />
              {/* <h3 style={{fontWeight : "bold" , color : "rgb(188,156,79)"}}>Fashionista</h3> */}
            </Link>
          </CDBBox>
          <CDBBox style={{ width: '50%' , display: "flex" , gap: "45%"}}>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600'}}>
              Our Collections
              </p>
              <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                <Link style={{textDecoration : "none" , color : "gray" , fontWeight : "bold"}} to="/Mens">Mens</Link>
                <Link style={{textDecoration : "none" , color : "gray" , fontWeight : "bold"}} to="/Womens">Womens</Link>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Black Friday
              </p>
              <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <Link style={{textDecoration : "none" , color : "gray" , fontWeight : "bold"}} to="/My_Cart">My Cart</Link>
                <Link style={{textDecoration : "none" , color : "gray" , fontWeight : "bold"}} to="/RegisterHere">Check Out</Link>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox display="flex" className="mt-4" justifyContent="between">
          <small className="ms-2">&copy; Black Friday , 2024. All rights reserved.</small>
          <CDBBox display="flex">
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBBox>
    </CDBModalFooter>
    </div>

  );
};