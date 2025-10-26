import React from "react";
import bannerImg from "../../assets/banner.png";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div
        className="text-center md:pt-44 pt-24 space-y-6 md:w-1/2 mx-auto
      "
      >
        <h1 className="text-3xl md:text-5xl font-medium lg:leading-tight leading-snug px-2 text-gray-50">
          Make your interior more minimalistic & modern
        </h1>
        <p className="text-xs font-normal w-1/2 mx-auto text-gray-200">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        {/* search field  */}
        <div className="relative inline-block z-30">
          <input
            type="text"
            placeholder="Search Furniture"
            className="w-80 px-6 py-2 bg-white/28 rounded-full border border-gray-300 focus:outline-none "
          />
          <div className="absolute right-3 top-1/2  transform -translate-y-1/2 p-2 bg-orange-300 rounded-full cursor-pointer">
            <FaSearch />
          </div>
        </div>
        {/* bottom blur effect  */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"></div>
      </div>
    </section>
  );
};

export default Hero;
