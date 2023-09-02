import React from 'react'
import img1 from './images/slider_img_1.jpg'
import img2 from './images/slider_img_2.jpg'

import "./coursel.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var settings = {
  autoplay: true,
  autoplaySpeed: 3000,



  speed: 500,

};
const Coursoule = () => {
  return (

    <div className='container my-3'>
      <div className='slider-content  '>
        <div className='container'>
          <div className='container'>
          <Slider {...settings}>
          <div className='container'>
          <img src={img1} className='w-100 container' />
          </div>
          
         
         <div className='container'>
         <img src={img2} className='w-100 container' />

         </div>
       

      
       
       
       

      </Slider>
          </div>
     
        </div>
        

      </div>

    </div>


  )
}

export default Coursoule
