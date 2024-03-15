import React from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from './Componant/Footer/Footer'
import Header from './Componant/Header/Header'
import NavbarConponant from "./Componant/Navbar/NavbarComponant"
import OurBlogs from './Componant/Our_Blogs/OurBlogs'
import OurProducts from './Componant/Our_Products/OurProducts'

export default function Home() {
  return (
    <>

    <Helmet>
      <title>Home</title>
      <meta name="description" content="Home Page" />
      {/* <link rel="canonical" href="/" /> */}
    </Helmet>
   
        <NavbarConponant />
        <Header />
        <OurProducts />
        {/* <New_Arrivals /> */}
        <OurBlogs />
        <Footer />
   
    </>
  )
}
