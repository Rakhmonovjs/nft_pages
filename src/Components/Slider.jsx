import React from 'react'
import Slider from "react-slick"
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { shopdata } from './assets/data/datadummy';

export const SliderContent = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        autoPlaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 512,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          }
        ]
    };
  return (
    <>
      <section className='slider'>
        <Slider {...settings}>
          {shopdata.map((item) => {
            <div className='box' key={item.id}>
              <div>
                <div className='img'>
                  <img src={item.cover} alt='' />
                </div>
                <div className='text'>
                  <h3>
                    {item.name}
                  </h3>
                  <span>
                    {item.price}
                  </span>
                </div>
              </div>

            </div>
          })}
            <div>
              <h3>1</h3>
            </div>
          </Slider>
      </section>
    </>
  )
}
