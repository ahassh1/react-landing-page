import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { reviews } from "../../utils/reviews";

const Testimonials = () => {
  return (
    <section className="container mx-auto max-w-screen-2xl py-6 px-4">
      <div className="text-center mb-6">
        <h3 className="uppercase text-lg font-semibold text-orange-400 mb-3">
          Testimonials
        </h3>
        <h1 className="font-semibold text-3xl capitalize">
          Our Client Reviews
        </h1>
      </div>
      {/* reviews cards  */}

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>Slide 1</SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
