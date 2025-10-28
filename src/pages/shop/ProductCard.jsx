import React from "react";
import { getImgUrl } from "../../utils/getImageURL";
import Rating from "../../components/Rating";
import { FiPlus } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs group">
      {/* Image container */}
      <div className="bg-[#FAFAFA] p-3 rounded-lg overflow-hidden">
        <img
          src={getImgUrl(product.imageUrl)}
          alt={product.name}
          className="w-full h-40 object-contain cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Product info */}
      <div className="p-3 bg-white shadow-sm rounded-lg">
        <h4 className="text-sm mb-0.5 text-gray-600">{product.category}</h4>
        <h3 className="font-semibold text-base mb-1">{product.name}</h3>
        <Rating rating={product.rating} />
        <div className="flex mt-2 justify-between items-center">
          <p className="font-bold text-sm text-gray-700">
            <sup>$</sup>
            <span>{product.price}</span>
          </p>
          <button className="bg-black text-white rounded-full hover:bg-black/60 p-1.5">
            <FiPlus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
