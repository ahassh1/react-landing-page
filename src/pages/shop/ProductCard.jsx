import React from "react";
import { getImgUrl } from "../../utils/getImageURL";
import Rating from "../../components/Rating";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="bg-[#FAFAFA] p-5">
        <img src={getImgUrl(product.imageUrl)} alt="" />
      </div>
      <div className="p-4 bg-white  shadow-sm">
        <h4 className="text-base mb-1 text-gray-600">{product.category}</h4>
        <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
        <Rating rating={product.rating} />
      </div>
    </div>
  );
};

export default ProductCard;
