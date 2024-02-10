import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../components/Carousel/CarouselPage.css';
import images from './images';

const CarouselPage = () => {

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };
  return (
        <div>
            <div className="imgslider">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id}>
                            <img
                                src={item.src}
                                alt={item.alt}
                                width={item.width}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
  )
}

export default CarouselPage;