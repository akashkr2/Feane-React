import React, { useState } from "react";
import MenuItemTemplate from "./templates/MenuItemTemplate";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BiSolidCart } from "react-icons/bi";

const menuItems = [
  {
    id: 1,
    title: "Delicious Pizza",
    category: "pizza",
    price: "$20",
    img: "/images/menu/pizza/pizza1.png",
  },
  {
    id: 2,
    title: "Delicious Burger",
    category: "burger",
    price: "$15",
    img: "/images/menu/burger/burger1.png",
  },
  {
    id: 3,
    title: "Delicious Pizza",
    category: "pizza",
    price: "$17",
    img: "/images/menu/pizza/pizza2.png",
  },
  {
    id: 4,
    title: "Delicious Pasta",
    category: "pasta",
    price: "$18",
    img: "/images/menu/pasta/pasta1.png",
  },
  {
    id: 5,
    title: "French Fries",
    category: "fries",
    price: "$10",
    img: "/images/menu/fries/fries1.png",
  },
  {
    id: 6,
    title: "Delicious Pizza",
    category: "pizza",
    price: "$5",
    img: "/images/menu/pizza/pizza3.png",
  },
  {
    id: 7,
    title: "Delicious Burger",
    category: "burger",
    price: "$12",
    img: "/images/menu/burger/burger2.png",
  },
  {
    id: 8,
    title: "Delicious Burger",
    category: "burger",
    price: "$14",
    img: "/images/menu/burger/burger3.png",
  },
  {
    id: 9,
    title: "Delicious Pasta",
    category: "pasta",
    price: "$10",
    img: "/images/menu/pasta/pasta2.png",
  },
];

const filters = ["all", "burger", "pizza", "pasta", "fries"];

const MenuAnimated = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  const sortedItems = [...filteredItems].sort((a, b) => a.id - b.id);

  return (
    <div id="menuDiv" className="py-[14vh] bg-white">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-[2.6rem] text-center mb-10 text-black dancing-script">
          Our Menu
        </h1>

        <ul className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <li
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`cursor-pointer text-[#222831] px-6 py-2 rounded-full text-md capitalize transition-all duration-300 ${
                activeFilter === filter ? "bg-[#222831] text-white" : ""
              }`}
            >
              {filter}
            </li>
          ))}
        </ul>

        <motion.div
          className="grid min-w-[30vw] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {sortedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, ease:"easeInOut" }}
              >
                <MenuItemTemplate item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {/* <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
                className=" text-white rounded-xl overflow-hidden group"
                style={{
                  background:
                    "linear-gradient(to bottom, #f1f2f3 25px,#222831 25px)",
                }}
              >
                <div className="overflow-hidden bg-[#f1f2f3] p-7 rounded-bl-[45px]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-40 object-contain transition-transform duration-200 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h5 className="text-lg font-semibold mb-2">{item.name}</h5>
                  <p className="text-md mb-4">
                    Veniam debitis quaerat officiis quasi cupiditate quo,
                    quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div className="flex justify-between items-center">
                    <h6 className="text-white font-bold">{item.price}</h6>
                    <button className="bg-yellow-400 p-2 rounded-full text-white hover:bg-yellow-500">
                      <BiSolidCart size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div> */}

        <div className="mt-10 text-center">
          <Link to="/menu">
            <span
              className="inline-block text-[1.035rem] px-13 py-2 bg-[#ffbe33] text-white rounded-full hover:bg-[#e69c00] transition"
              onClick={() => {
                setActiveFilter("all");
              }}
            >
              View More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuAnimated;
