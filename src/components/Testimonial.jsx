import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from 'swiper/modules';
// import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css/pagination";


import '../styles/Testimonial.css'
import profilePic1 from '../assets/profile1.jpg';
import profilePic2 from '../assets/profile2.jpg';
import profilePic3 from '../assets/profile3.jpg';
import profilePic4 from '../assets/profile4.jpg';

const Testimonial = () => {
    {/* Array of cLients */}
    const clients =[
        {
            img: profilePic1,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quo et similique ipsa consequatur fugiat tempora, nisi veritatis dolore. Quos."
        },
        {
            img: profilePic2,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quo et similique ipsa consequatur fugiat tempora, nisi veritatis dolore. Quos."
        },
        {
            img: profilePic3,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quo et similique ipsa consequatur fugiat tempora, nisi veritatis dolore. Quos."
        },
        {
            img: profilePic4,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quo et similique ipsa consequatur fugiat tempora, nisi veritatis dolore. Quos."
        }
    ]


  return (
    <div className='t-wrapper' id="Testimonials">
      <div className="t-heading">
        <span>Clients alwasys get </span>
        <span>@nbps Exceptional Work </span>
        <span>@nbps from me...</span>
        <div className="blur t-blur1" style={{background:"var(--purple"}}></div>
        <div className="blur t-blur2" style={{background: "skyblue"}}></div>
      </div>
      { /* Slider */ }
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>    
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonial
