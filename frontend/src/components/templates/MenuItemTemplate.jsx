import React from "react";
import { BiSolidCart } from "react-icons/bi";

const MenuItemCard = ({ item }) => {
  return (
    <div className="group transition-transform duration-300 transform">
      <div
        className="rounded-xl overflow-hidden text-white"
        style={{
          background: "linear-gradient(to bottom, #f1f2f3 25px, #222831 25px)",
        }}
      >
        <div className="bg-gray-100 flex justify-center items-center p-8 rounded-bl-[45px]">
          <img
            src={item.img}
            alt={item.title}
            className="h-[140px] transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-5">
          <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
          <p className="text-base text-gray-200 mb-4">
            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
            velit, magnam voluptatem repellendus sed eaque.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg">{item.price}</span>
            <button className="bg-[#ffbe33] text-white text-2xl p-2 rounded-full hover:scale-110 transition">
              <BiSolidCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
