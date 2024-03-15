import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from "@mui/material";
import { Navbar, Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./Logo/Logo.png";
import "./style.css";

export default function NavbarComponant() {

  const cart = useSelector(state => state.cart) ;


  return (
    <>
     
     {["lg"].map((expand) => (

        <Navbar fixed="top" style={{margin : "0" , padding : "0" , backgroundColor : "white" , borderBottom : "2px solid rgb(156, 156, 157)"}}
              key={expand}
              expand={expand}
            
        >
          <section className="NavbarWrapper">

          <Container>

          <div className="NavContainer">




        <Link to="/">
            <img style={{width : "7rem"}} src={logo}  alt="logo"/>
        </Link>




        <Navbar.Toggle
                  className="NavbarToggle"
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  style={{ width: "100%", height: "100%" }}
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="top"
                >
            

            <Offcanvas.Header
                    closeVariant="black"
                    closeButton
                  >
            </Offcanvas.Header>

            <Offcanvas.Body>
            <div className="LinksWrapper-home">


            <Link className="nav-link-home" to="/">Home</Link>
            <Link className="nav-link-home" to="/Mens">Mens</Link>
            <Link className="nav-link-home" to="/Womens">Womens</Link>

                </div>

                </Offcanvas.Body>
                </Navbar.Offcanvas>



                <Link style={{textDecoration: "none"}} to="/My_Cart">
                <div className="Cart">
                  <span className="titleCart-home">My Cart</span>
                <Link style={{textDecoration: "none"}} to="/My_Cart">
                  <div style={{ marginLeft: "3px" , background : "rgb(188,156,79)" , color : "white" , width : "1.2rem" , height : "1.2rem" , textAlign : "center" , borderRadius : "1.2rem" , fontSize : "12px" }}>{cart.length}</div>
                <FontAwesomeIcon icon={faShoppingBasket} style={{ fontSize : "22px" , color: "rgb(188,156,79)" }} />
                </Link>
               
            </div>
            </Link>


              </div>
            </Container>
          </section>
        </Navbar>
      

     ))}
    </>
  );
}

