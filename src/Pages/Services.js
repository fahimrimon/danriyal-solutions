import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { ServiceData } from '../Data/ServiceData';
import './Services.css';

function Services() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    initialSlide: 0,
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
          slidesToShow: 1,
          slidesToScroll: 1,
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
  return (
    <div name='services' className='slickgap'>
      <div className='text-center'>


        {/* Service heading part */}
        <h2 className='text-red-500 text-4xl mb-2'>Services</h2>
        <h2 className='text-2xl font-semibold mb-4 text-gray-900'>We Provide Prominent Technology Solutions</h2>
        <p className='text-base text-lg mb-16 text-gray-800'>Danriyal Solutions Technologies, Worldwide based custom software development & consulting company focusing on web, mobile, desktop & embedded software development. It’s committed to meet the highest of ethical standards of work by implementing web & mobile solutions without making any compromise on their quality & functionality. & get back to you within one business day with free consultation & to discuss the next steps.</p>
      </div>


      {/* Service Slider */}
        <Slider {...settings}>
          {ServiceData.map((item, index) =>(
            <div key={index} className="card h-80 w-32 shadow-sm rounded-bl-lg rounded-tr-lg border border-black">
            <figure className="px-10 pt-10">
              <img src={item.img} alt="img" className="rounded-xl w-16 h-16" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-gray-900">{item.title}</h2>
              <p className='text-lg text-gray-800'>{item.des}</p>
              <div className="card-actions">
              </div>
            </div>
          </div>
          ))}
        </Slider>
    </div>
  );
  }

export default Services
