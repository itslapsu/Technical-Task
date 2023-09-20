import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../css/Slider.css";

export const Slider2 = () => {
  useEffect(() => {
    const slider2 = new Swiper(".slider2", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      modules: [Navigation, Pagination],
      slidesPerView: 3,
    });

    return () => {
      slider2.destroy();
    };
  }, []);

  return (
    <div className="slider2">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="content">
            <p className="content_text">Слайд 1</p>
          </div>
          <img
            className="img"
            src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <div className="content">
            <p className="content_text">Слайд 2</p>
          </div>
          <img
            className="img"
            src="https://wowslider.com/sliders/demo-18/data1/images/new_york.jpg"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <div className="content">
            <p className="content_text">Слайд 3</p>
          </div>
          <img
            className="img"
            src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <div className="content">
            <p className="content_text">Слайд 4</p>
          </div>
          <img
            className="img"
            src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <div className="content">
            <p className="content_text">Слайд 5</p>
          </div>
          <img
            className="img"
            src="https://wowslider.com/sliders/demo-18/data1/images/new_york.jpg"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <div className="content">
            <p className="content_text">Слайд 6</p>
          </div>
          <img
            className="img"
            src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <div className="content">
            <p className="content_text">Слайд 7</p>
          </div>
          <img
            className="img"
            src="https://wowslider.com/sliders/demo-18/data1/images/new_york.jpg"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <div className="content">
            <p className="content_text">Слайд 8</p>
          </div>
          <img
            className="img"
            src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="swiper-pagination"></div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-scrollbar"></div>
    </div>
  );
};
