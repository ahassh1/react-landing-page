import React, { useState } from "react";
import { products } from "../../utils/Products";
import ProductCard from "./ProductCard";
import buttonImg from "../../assets/button-icon.png";

const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [visibleProducts, setVisibleProducts] = useState(4);
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div>
      <div className="container mx-auto max-w-screen-2xl py-6 px-4">
        <h2 className="text-2xl md:text-4xl md:my-7 font-bold text-center my-4">
          {headline}
        </h2>

        {/* category tabs */}
        <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2 py-5 sm:mb-8 mb-16">
          <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
            {categories.map((category) => (
              <button
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProducts(4);
                }}
                key={category}
                className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-orange-400 ${
                  selectedCategory === category
                    ? "bg-white text-orange-400"
                    : "text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleProducts).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* load more btn  */}
        {visibleProducts < filteredProducts.length && (
          <div className="flex justify-center items-center md:mt-8 mt-5">
            <button
              onClick={loadMoreProducts}
              className="flex text-base font-semibold items-center gap-1"
            >
              <p className="text-orange-400">View more</p>
              <img src={buttonImg} alt="button-img" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
