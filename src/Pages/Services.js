import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { ServiceData } from '../Data/ServiceData';
import './Services.css';

function Services() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
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
  return (
    <div className='my-32'>
        <Slider {...settings}>
          {ServiceData.map((item, index) =>(
            <div key={index} className="card max-w-lg h-96 bg-base-100 shadow-lg">
            <figure className="px-10 pt-10">
              <img src={item.img} alt="Shoes" className="rounded-xl w-16" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.des}</p>
              <div className="card-actions">
                <button className="btn btn-primary fixed-bottom">Buy Now</button>
              </div>
            </div>
          </div>
          ))}
        </Slider>
    </div>
  );
  }

export default Services
