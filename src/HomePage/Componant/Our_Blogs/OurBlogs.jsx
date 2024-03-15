import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Container } from '@mui/material';
import { Autoplay } from 'swiper/modules';
import Photo1 from "./PhotoOurBlogs/1.jpg";
import Photo2 from "./PhotoOurBlogs/2.webp";
import Photo3 from "./PhotoOurBlogs/3.jpg";
import Photo4 from "./PhotoOurBlogs/4.webp";
import Photo5 from "./PhotoOurBlogs/5.jpg";
import Photo6 from "./PhotoOurBlogs/6.webp";
import Photo7 from "./PhotoOurBlogs/7.jpeg";
import Photo8 from "./PhotoOurBlogs/8.jpeg";
import Photo9 from "./PhotoOurBlogs/9.jpeg";
import './style.css';



export default function OurBlogs() {
  return (
      <Container>
    <section className="secion">

    <h2>Our Blogs</h2>
    <br />

      <Swiper

        grabCursor = {true}
        loop={true}
        autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}

        slidesPerView={1}
     
      
        breakpoints={{
          640: {
            slidesPerView: 2,
            
          },
          768: {
            slidesPerView: 3,
           
          },
          1024: {
            slidesPerView: 4,
            
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img  className='image1' src={Photo1} alt='Photo1'/></SwiperSlide>
        <SwiperSlide><img  className='image1' src={Photo2} alt='Photo2'/></SwiperSlide>
        <SwiperSlide><img  className='image1' src={Photo3} alt='Photo3'/></SwiperSlide>
        <SwiperSlide><img  className='image1' src={Photo4} alt='Photo4'/></SwiperSlide>
        <SwiperSlide><img  className='image1' src={Photo5} alt='Photo5'/></SwiperSlide>
        <SwiperSlide><img  className='image1' src={Photo6} alt='Photo6'/></SwiperSlide>
        <SwiperSlide><img  className='image1' src={Photo7} alt='Photo7'/></SwiperSlide>
        <SwiperSlide><img  className='image1' src={Photo8} alt='Photo8'/></SwiperSlide>
        <SwiperSlide><img  className='image1' src={Photo9} alt='Photo9'/></SwiperSlide>
      </Swiper>

    </section>
</Container>
  )
}
