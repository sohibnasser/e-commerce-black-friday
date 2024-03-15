
import { Helmet } from "react-helmet-async"
import Footer from "../HomePage/Componant/Footer/Footer"
import NavbarComponant from './Navbar/NavbarComponant'
import ProductsCart from './ProductCart/ProductsCart'


export default function CartPage() {
  return (
    <>


    <Helmet>
      <title>Cart</title>
      <meta name="description" content="Cart Page" />
      {/* <link rel="canonical" href="/" /> */}
    </Helmet>


        <NavbarComponant />
        <ProductsCart />
        <Footer />
    </>
  )
}
