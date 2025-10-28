import React from "react";
import material1 from "../../assets/material1.png";
import material2 from "../../assets/material2.png";
import material3 from "../../assets/material3.png";
import Button from "../../components/Button";

const Materials = () => {
  return (
    <section className="container mx-auto max-w-screen-2xl py-6 px-4 my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-6">
      <div className="md:w-1/2 mx-auto">
        <h3 className="uppercase text-lg font-semibold text-orange-400 mb-3">
          Materials
        </h3>
        <h1 className="font-semibold text-3xl capitalize lg:w-1/2">
          Very serious materials for making furniture
        </h1>
        <p className="text-gray-600 text-sm lg:w-2/3 my-3 ">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <Button text="More Info" />
      </div>

      <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 items-center md:items-end">
        <div>
          <img src={material1} alt="" />
          <img src={material2} alt="" />
        </div>
        <div className="md:col-span-2 col-span-1">
          <img src={material3} alt="" className="w-full md:h-[541px]" />
        </div>
      </div>
    </section>
  );
};

export default Materials;
