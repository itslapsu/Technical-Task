import React from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../css/Slider.css";

export const Slider1 = () => {
  React.useEffect(() => {
    const slider1 = new Swiper(".slider1", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      modules: [Navigation, Pagination],
    });

    return () => {
      slider1.destroy();
    };
  }, []);

  return (
    <div className="slider1">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            className="img"
            src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <img
            className="img"
            src="https://wowslider.com/sliders/demo-18/data1/images/new_york.jpg"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <img
            className="img"
            src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="content">
        <p className="content_text">Здесь текст</p>
        <button className="content_button">Здесь кнопка</button>
      </div>
      <div className="swiper-pagination"></div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-scrollbar"></div>
    </div>
  );
};
