import '../assets/css/Slide.css';
import slideData from '../data/slide.js';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules"; 

import { useState } from "react";

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(1); 

  return (
    <div className="Slide">
      <div className="slide_bgc_area">
        <div className="inner">
          <Swiper
            modules={[Pagination]} 
            spaceBetween={50} 
            slidesPerView={1} 
            pagination={{ 
              el: '.custom-progress-bar',
              type: 'progressbar'
            }} 
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex + 1)} 
          >
            {slideData.map((slide) => (
              <SwiperSlide className="SwiperSlide" key={slide.id}>
                <div className="slide_area">
                  <div className="text_area">
                    <p className="title">{slide.title}</p>
                    <p className="description1">{slide.description1}</p>
                    <p className="description2">{slide.description2}</p>
                    <button>자세히보기</button>
                  </div>
                  <div className="img_area">
                    <div className="img_box">
                      <img src={slide.image} alt={slide.title} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Progress Bar & 숫자 페이지네이션 */}
          <div className="progress-bar-wrapper">
            <div className="custom-progress-bar">
              <div className="swiper-pagination-progressbar-fill"></div> {/* ✅ 진행 바 */}
            </div>
            <div className="pagination-numbers">
              <span className="current-slide">{currentIndex}</span>
              <span className="separator"> / </span>
              <span className="total-slides">{slideData.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
