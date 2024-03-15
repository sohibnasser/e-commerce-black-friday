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
import { fetchProducts3 } from "../Redux_ToolKit/Slices/Products/Products_Slice3";
import { fetchProducts4 } from "../Redux_ToolKit/Slices/Products/Products_Slice4";
import { fetchProducts5 } from "../Redux_ToolKit/Slices/Products/Products_Slice5";
import { fetchProducts6 } from "../Redux_ToolKit/Slices/Products/Products_Slice6";
import { fetchProducts8 } from "../Redux_ToolKit/Slices/Products/Products_Slice8";
import { fetchProducts9 } from "../Redux_ToolKit/Slices/Products/Products_Slice9";
// import "./style.css";

export default function Womens() {


const products3 = useSelector(state => state.products3) ;
const products4 = useSelector(state => state.products4) ;
const products5 = useSelector(state => state.products5) ;
const products6 = useSelector(state => state.products6) ;
const products8 = useSelector(state => state.products8) ;
const products9 = useSelector(state => state.products9) ;


const dispatch = useDispatch() ;



useEffect(() => {
  dispatch(fetchProducts3())
},[]);

useEffect(() => {
  dispatch(fetchProducts4())
},[]);

useEffect(() => {
  dispatch(fetchProducts5())
},[]);

useEffect(() => {
  dispatch(fetchProducts6())
},[]);

useEffect(() => {
  dispatch(fetchProducts8())
},[]);

useEffect(() => {
  dispatch(fetchProducts9())
},[]);




// console.log(products4);

  return (


<>

    <Helmet>
      <title>Womens Products</title>
      <meta name="description" content="Womens Products Page" />
      {/* <link rel="canonical" href="/" /> */}
    </Helmet>



<NavbarComponant />


    <div style={{margin : "8rem 0"}}>
    <Container>
      <h2>Womens Products</h2>
      <br />

      <Row xs={1} sm={2} md={2}  lg={3} xl={3}>



        {products3.products?.map(product3 => (
            <Col key={product3.id}>
            <Card className="card">
              {/* <Card.Img className="card-img" variant="top" src={imageOurproduct3}  alt=""/> */}
              <Card.Img style={{width : "100%"}} className="card-img" variant="top" src= {product3.thumbnail} />
              <Card.Body>
                <Card.Title style={{ color : "rgb(191,42,69)"}}>{product3.title}</Card.Title>
               
                <Card.Text style={{ width : "100%" , height : "20px", overflow : "Hidden"}}>{product3.description}</Card.Text>

                <div  style={{display : "flex" , gap : "1rem" , justifyContent : "center" }}>
                    <Card.Title>{product3.price.toFixed(2)} $</Card.Title>
                    <del style={{color : "#9c9797f5"}}> {(product3.discountPercentage + product3.price).toFixed(2)} $</del>
                </div>

                <Button onClick={()=> dispatch(addToCart(product3))} variant="outline-dark">Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}


        {products4.products?.map(product4 => (
            <Col key={product4.id}>
            <Card className="card">
              {/* <Card.Img className="card-img" variant="top" src={imageOurproduct4}  alt=""/> */}
              <Card.Img style={{width : "100%"}} className="card-img" variant="top" src= {product4.thumbnail} />
              <Card.Body>
                <Card.Title style={{ color : "rgb(191,42,69)"}}>{product4.title}</Card.Title>
               
                <Card.Text style={{ width : "100%" , height : "20px", overflow : "Hidden"}}>{product4.description}</Card.Text>

                <div  style={{display : "flex" , gap : "1rem" , justifyContent : "center" }}>
                    <Card.Title>{product4.price.toFixed(2)} $</Card.Title>
                    <del style={{color : "#9c9797f5"}}> {(product4.discountPercentage + product4.price).toFixed(2)} $</del>
                </div>

                <Button onClick={()=> dispatch(addToCart(product4))} variant="outline-dark">Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        

        {products5.products?.map(product5 => (
            <Col key={product5.id}>
            <Card className="card">
              {/* <Card.Img className="card-img" variant="top" src={imageOurproduct5}  alt=""/> */}
              <Card.Img style={{width : "100%"}} className="card-img" variant="top" src= {product5.thumbnail} />
              <Card.Body>
                <Card.Title style={{ color : "rgb(191,42,69)"}}>{product5.title}</Card.Title>
               
                <Card.Text style={{ width : "100%" , height : "20px", overflow : "Hidden"}}>{product5.description}</Card.Text>

                <div  style={{display : "flex" , gap : "1rem" , justifyContent : "center" }}>
                    <Card.Title>{product5.price.toFixed(2)} $</Card.Title>
                    <del style={{color : "#9c9797f5"}}> {(product5.discountPercentage + product5.price).toFixed(2)} $</del>
                </div>

                <Button onClick={()=> dispatch(addToCart(product5))} variant="outline-dark">Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}


        {products6.products?.map(product6 => (
            <Col key={product6.id}>
            <Card className="card">
              {/* <Card.Img className="card-img" variant="top" src={imageOurproduct6}  alt=""/> */}
              <Card.Img style={{width : "100%"}} className="card-img" variant="top" src= {product6.thumbnail} />
              <Card.Body>
                <Card.Title style={{ color : "rgb(191,42,69)"}}>{product6.title}</Card.Title>
               
                <Card.Text style={{ width : "100%" , height : "20px", overflow : "Hidden"}}>{product6.description}</Card.Text>

                <div  style={{display : "flex" , gap : "1rem" , justifyContent : "center" }}>
                    <Card.Title>{product6.price.toFixed(2)} $</Card.Title>
                    <del style={{color : "#9c9797f5"}}> {(product6.discountPercentage + product6.price).toFixed(2)} $</del>
                </div>

                <Button onClick={()=> dispatch(addToCart(product6))} variant="outline-dark">Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}

        
        {products8.products?.map(product8 => (
            <Col key={product8.id}>
            <Card className="card">
              {/* <Card.Img className="card-img" variant="top" src={imageOurproduct8}  alt=""/> */}
              <Card.Img style={{width : "100%"}} className="card-img" variant="top" src= {product8.thumbnail} />
              <Card.Body>
                <Card.Title style={{ color : "rgb(191,42,69)"}}>{product8.title}</Card.Title>
               
                <Card.Text style={{ width : "100%" , height : "20px", overflow : "Hidden"}}>{product8.description}</Card.Text>

                <div  style={{display : "flex" , gap : "1rem" , justifyContent : "center" }}>
                    <Card.Title>{product8.price.toFixed(2)} $</Card.Title>
                    <del style={{color : "#9c9797f5"}}> {(product8.discountPercentage + product8.price).toFixed(2)} $</del>
                </div>

                <Button onClick={()=> dispatch(addToCart(product8))} variant="outline-dark">Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}

        
        {products9.products?.map(product9 => (
            <Col key={product9.id}>
            <Card className="card">
              {/* <Card.Img className="card-img" variant="top" src={imageOurproduct9}  alt=""/> */}
              <Card.Img style={{width : "100%"}} className="card-img" variant="top" src= {product9.thumbnail} />
              <Card.Body>
                <Card.Title style={{ color : "rgb(191,42,69)"}}>{product9.title}</Card.Title>
               
                <Card.Text style={{ width : "100%" , height : "20px", overflow : "Hidden"}}>{product9.description}</Card.Text>

                <div  style={{display : "flex" , gap : "1rem" , justifyContent : "center" }}>
                    <Card.Title>{product9.price.toFixed(2)} $</Card.Title>
                    <del style={{color : "#9c9797f5"}}> {(product9.discountPercentage + product9.price).toFixed(2)} $</del>
                </div>

                <Button onClick={()=> dispatch(addToCart(product9))} variant="outline-dark">Add To Cart</Button>
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
