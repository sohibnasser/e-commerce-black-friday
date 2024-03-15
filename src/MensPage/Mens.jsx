import { Container } from "@mui/material";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../HomePage/Componant/Footer/Footer";
import NavbarComponant from "../HomePage/Componant/Navbar/NavbarComponant";
import { addToCart } from "../Redux_ToolKit/Slices/Cart_Slice";
import { fetchProducts } from "../Redux_ToolKit/Slices/Products/Products_Slice1";
import { fetchProducts2 } from "../Redux_ToolKit/Slices/Products/Products_Slice2";
import { fetchProducts7 } from "../Redux_ToolKit/Slices/Products/Products_Slice7";
// import "./style.css";

export default function Mens() {

const products = useSelector(state => state.products) ;
const products2 = useSelector(state => state.products2) ;
const products7 = useSelector(state => state.products7) ;



const dispatch = useDispatch() ;


useEffect(() => {
  dispatch(fetchProducts())
},[]);

useEffect(() => {
  dispatch(fetchProducts2())
},[]);

useEffect(() => {
  dispatch(fetchProducts7())
},[]);





// console.log(products4);

  return (

    <>


    <Helmet>
      <title>Mens Products</title>
      <meta name="description" content="Mens Products Page" />
      {/* <link rel="canonical" href="/" /> */}
    </Helmet>


    <NavbarComponant />


    <div style={{margin : "8rem 0"}}>
    <Container>
      <h2>Mens Products</h2>
      <br />

      <Row xs={1} sm={2} md={2}  lg={3} xl={3}>

        
        {products.products?.map(product => (
            <Col key={product.id}>
            <Card className="card">
              {/* <Card.Img className="card-img" variant="top" src={imageOurproduct}  alt=""/> */}
              <Card.Img style={{width : "100%"}} className="card-img" variant="top" src= {product.thumbnail} />
              <Card.Body>
                <Card.Title style={{ color : "rgb(191,42,69)"}}>{product.title}</Card.Title>
               
                <Card.Text style={{ width : "100%" , height : "20px", overflow : "Hidden"}}>{product.description}</Card.Text>

                <div  style={{display : "flex" , gap : "1rem" , justifyContent : "center" }}>
                    <Card.Title>{product.price.toFixed(2)} $</Card.Title>
                    <del style={{color : "#9c9797f5"}}> {(product.discountPercentage + product.price).toFixed(2)} $</del>
                </div>

                <Button onClick={()=> dispatch(addToCart(product))} variant="outline-dark">Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        
     
        {products2.products?.map(product2 => (
            <Col key={product2.id}>
            <Card className="card">
              {/* <Card.Img className="card-img" variant="top" src={imageOurproduct2}  alt=""/> */}
              <Card.Img style={{width : "100%"}} className="card-img" variant="top" src= {product2.thumbnail} />
              <Card.Body>
                <Card.Title style={{ color : "rgb(191,42,69)"}}>{product2.title}</Card.Title>
               
                <Card.Text style={{ width : "100%" , height : "20px", overflow : "Hidden"}}>{product2.description}</Card.Text>

                <div  style={{display : "flex" , gap : "1rem" , justifyContent : "center" }}>
                    <Card.Title>{product2.price.toFixed(2)} $</Card.Title>
                    <del style={{color : "#9c9797f5"}}> {(product2.discountPercentage + product2.price).toFixed(2)} $</del>
                </div>

                <Button onClick={()=> dispatch(addToCart(product2))} variant="outline-dark">Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}

        
        {products7.products?.map(product7 => (
            <Col key={product7.id}>
            <Card className="card">
              {/* <Card.Img className="card-img" variant="top" src={imageOurproduct7}  alt=""/> */}
              <Card.Img style={{width : "100%"}} className="card-img" variant="top" src= {product7.thumbnail} />
              <Card.Body>
                <Card.Title style={{ color : "rgb(191,42,69)"}}>{product7.title}</Card.Title>
               
                <Card.Text style={{ width : "100%" , height : "20px", overflow : "Hidden"}}>{product7.description}</Card.Text>

                <div  style={{display : "flex" , gap : "1rem" , justifyContent : "center" }}>
                    <Card.Title>{product7.price.toFixed(2)} $</Card.Title>
                    <del style={{color : "#9c9797f5"}}> {(product7.discountPercentage + product7.price).toFixed(2)} $</del>
                </div>

                <Button onClick={()=> dispatch(addToCart(product7))} variant="outline-dark">Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
       

      </Row>
    </Container>
    </div>


    <Footer />
    </>
  );
}
