import '../assets/css/Best.css';
import bestBooks from '../data/Best';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules"; 

const Best = () => {
  return (
    <div className="Best">
      <div className="inner">
        <div className="Best_title">
          <p><span>행운책방의 </span>BEST 도서</p>
        </div>
        <Swiper
          modules={[Pagination]} 
          spaceBetween={10} 
          slidesPerView={5} 
          centeredSlides={true} 
          loop={true} 
          pagination={{ clickable: true }}
        >
          {bestBooks.map((best, index) => (
            <SwiperSlide 
              className="BestSlide" 
              key={best.id}
            >
              <div className="Best_area">
                <div className="img_area">
                    <div className="img_box">
                      <img src={best.img} alt={best.title} />
                    </div>
                  </div>
                <div className="text_area">
                  <p className="title">{best.title}</p>
                  <p className="price">{best.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Best;
