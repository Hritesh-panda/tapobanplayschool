import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import HeroOne from "../../asset/hero2.jpg";
import HeroTwo from "../../asset/hero3.jpg";
import Herothree from "../../asset/hero4.jpg";
import "./Header.css";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
const Header = () => {
  return (
    <div className="header">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={HeroOne} alt="NO image found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroTwo} alt="No image found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Herothree} alt="No image found" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
