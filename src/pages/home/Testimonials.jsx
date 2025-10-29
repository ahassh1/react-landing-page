import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { reviews } from "../../utils/reviews";
import Rating from "../../components/Rating";

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
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="bg-no-repeat bg-cover rounded-lg"
            style={{ backgroundImage: `url(${review.coverImg})` }}
          >
            {/* Responsive height for different screen sizes */}
            <div className="md:h-[471px] h-[350px] sm:h-[400px] flex justify-center items-center">
              {/* middle card start */}
              <div className="relative mt-2 mb-12 bg-white rounded-xl md:w-4/5 w-11/12 md:p-9 p-6 mx-auto">
                <img
                  src={review.image}
                  alt={`${review.name} profile`}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 ring-2 ring-orange-400 object-cover rounded-full w-12 h-12 md:w-14 md:h-14"
                />
                <div className="mt-6 text-center">
                  <h3 className="dark:text-black font-semibold text-lg md:text-[20px]">
                    {review.name}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-[15px] m-1">
                    Verified Customer
                  </p>
                  <p className="text-gray-500 text-xs md:text-[13px] m-2 line-clamp-4">
                    {review.review}
                  </p>
                  <div className="flex justify-center items-center text-center mt-2">
                    <Rating rating={review.rating} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
