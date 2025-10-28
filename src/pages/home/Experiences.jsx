import React from "react";
import experiencesImg from "../../assets/expricences.png";
import Button from "../../components/Button";

const Experiences = () => {
  return (
    <section className="container mx-auto max-w-screen-2xl py-6 px-4 my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-6">
      <div className="md:w-1/2 md:h-[541px]">
        <img src={experiencesImg} alt="" className="w-full h-full" />
      </div>
      <div className="md:w-1/2 mx-auto">
        <h3 className="uppercase text-lg font-semibold text-orange-400 mb-3">
          experiences
        </h3>
        <h1 className="font-semibold text-3xl capitalize lg:w-1/2">
          we provide you the best experience
        </h1>
        <p className="text-gray-600 text-sm lg:w-2/3 my-3 ">
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <Button text="More Info" />
      </div>
    </section>
  );
};

export default Experiences;
