import carru1 from '../Assets/redi1.png';
import carru2 from '../Assets/redi2.png';
import carru3 from '../Assets/redi3.png';
import carru4 from '../Assets/redi4.png';
import carru5 from '../Assets/redi5.png';
import carru6 from '../Assets/redi6.png';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';




function Slider() {
return (
    <div className="container-swiper">
    <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={carru1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carru2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carru3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carru4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carru5} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carru6} alt="slide_image" />
            </SwiperSlide>
            
            <div className="slider-controler">
            <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
          </div>
    );
}

export default Slider;