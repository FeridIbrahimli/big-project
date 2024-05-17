import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../assets/css/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper style={{height:"88vh"}}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img  height={"100%"} style={{backgroundRepeat:"no-repeat"}} src="https://preview.colorlib.com/theme/tasty/images/bg_1.jpg" alt="wELCOME" /></SwiperSlide>
        <SwiperSlide><img height={"100%"} style={{backgroundRepeat:"no-repeat"}} src="https://preview.colorlib.com/theme/tasty/images/bg_2.jpg" alt="wELCOME" /></SwiperSlide>
        <SwiperSlide> <img height={"100%"} style={{backgroundRepeat:"no-repeat"}} src="https://preview.colorlib.com/theme/tasty/images/bg_3.jpg" alt="wELCOME" /></SwiperSlide>
      </Swiper>
    </>
  );
}
