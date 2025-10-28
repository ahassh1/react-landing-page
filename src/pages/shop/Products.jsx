import React from "react";

const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];

  return (
    <div>
      <div className="container mx-auto max-w-screen-2xl py-6 px-4">
        <h2 className="text-2xl md:text-4xl md:my-7 font-bold text-center my-4">
          {headline}
        </h2>

        {/* category tabs */}
        <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
          <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="py-1.5 sm:px-5 px-8 rounded-full hover:bg-orange-400"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
