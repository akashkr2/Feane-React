import React from "react";
import { Link } from "react-router-dom";
import { BiSolidCart } from "react-icons/bi";

const OfferCard = ({ imageSrc, title, discount, link }) => {
  return (
    <div className="flex items-center p-4 bg-[#222831] text-white rounded-md w-full max-w-2xl group hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-44 h-44 rounded-full border-[5px] border-[#ffbe33] overflow-hidden mr-4 shrink-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-center items-start w-full mt-2">
        <h4 className="text-2xl dancing-script">{title}</h4>
        <h6 className="text-lg my-2 dancing-script">
          <span className="text-4xl">{discount}</span> <span>Off</span>
        </h6>
        <Link to={link}>
          <span className="inline-flex items-center text-base px-9 py-[0.6rem] bg-[#ffbe33] text-white rounded-full mt-2 hover:bg-[#e69c00] transition-all duration-300">
            Order Now <BiSolidCart className="text-2xl" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default OfferCard;
