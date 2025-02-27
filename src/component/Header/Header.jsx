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
          <img src={HeroOne} alt="hero1" className="header_image" />
          <div className="overlay-content">
            <div className="header_image-content">
              <h4>
                Welcome to Our <br /> Playschool
              </h4>
              <p>
                we are childcare center committed to providing a safe and <br />
                nurturing environment for your childgen.
              </p>
              <button>Contact us </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroTwo} alt="hero2" className="header_image" />
          <div className="overlay-content">
            <div className="header_image-content">
              <h4>
                Welcome to Our <br /> Playschool
              </h4>
              <p>
                we are childcare center committed to providing a safe and <br />
                nurturing environment for your childgen.
              </p>
              <button>Contact us </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Herothree} alt="hero3" className="header_image" />
          <div className="overlay-content">
            <div className="header_image-content">
              <h4>
                Welcome to Our <br /> Playschool
              </h4>
              <p>
                we are childcare center committed to providing a safe and <br />
                nurturing environment for your childgen.
              </p>
              <button>Contact us </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
