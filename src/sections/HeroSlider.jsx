'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HeroOne from "./HeroOne";
import HeroTwo from "./HeroTwo";
// import HeroThree from "./HeroThree";
// import HeroFour from "./HeroFour";
// import HeroFive from "./HeroFive";
import HeroSection from "./HeroSection";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000 }}
      loop
      className='w-full h-screen'
    >
      <SwiperSlide>
        <HeroOne />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSection />
      </SwiperSlide>
      <SwiperSlide>
        <HeroTwo/>
      </SwiperSlide>
      {/* <SwiperSlide>
        <HeroFour />
      </SwiperSlide>
      <SwiperSlide>
        <HeroFive />
      </SwiperSlide> */}
    </Swiper>
  );
}
