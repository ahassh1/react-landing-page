import React from "react";
import bannerImg from "../../assets/banner.png";
import Products from "./Products";

const Shop = () => {
  return (
    <section className="min-h-screen">
      {/* banner  */}
      <div
        className="w-full h-[400px] bg-cover bg-center flex
        justify-center items-center text-white"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1 className="text-4xl font-bold">Shop Our Product</h1>
      </div>
      <Products />
    </section>
  );
};

export default Shop;
