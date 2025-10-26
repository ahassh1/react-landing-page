import React from "react";
import bannerImg from "../../assets/banner.png";

const Hero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div
        className="text-center md:pt-48 pt-25 space-y-6 md:w-1/2 mx-auto
      "
      >
        <h1 className="text-3xl md:text-5xl font-medium lg:leading-tight leading-snug px-2 text-gray-50">
          Make your interior more minimalistic & modern
        </h1>
        <p className="text-xs font-normal w-1/2 mx-auto text-gray-200">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
      </div>
    </section>
  );
};

export default Hero;
