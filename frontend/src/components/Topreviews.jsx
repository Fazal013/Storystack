import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Card from './Card';
import { useState,useEffect } from 'react';

function Topreviews() {
  const [review,setReview]=useState([]);
  useEffect(()=>{
      const getReview=async()=>{
        try{
         const res= await axios.get("http://localhost:4001/review");
         console.log(res.data.filter((data)=>data.Category === "top-reviews"));
         console.log(res.data)
         setReview(res.data)
        } catch(error){
            console.log(error)
        }
      }
      getReview();
  },[])
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return(
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div>
        <h1 className='font-semibold text-2xl pb-2'>Top <span className='text-pink-600'>REVIEWS</span> of the week...</h1>
        <p className='ml-10'>
         Discover the books readers can’t stop raving about! Dive into this week’s most-loved pick...
        </p>
        </div>
      
      <div className='mt-5'>
      <Slider {...settings}>
        {review.map((item)=>(
          <Card item={item} key={item.id}/>
        ))}
      </Slider>
      </div>
      </div>
      
    </>
  )
}

export default Topreviews
