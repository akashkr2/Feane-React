import React, { useState } from "react";
import MenuItemTemplate from "./templates/MenuItemTemplate";
import { Link } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    title: "Delicious Pizza",
    category: "pizza",
    price: "$20",
    img: "../images/menu/pizza/pizza1.png",
  },
  {
    id: 2,
    title: "Delicious Burger",
    category: "burger",
    price: "$15",
    img: "../images/menu/burger/burger1.png",
  },
  {
    id: 3,
    title: "Delicious Pizza",
    category: "pizza",
    price: "$17",
    img: "../images/menu/pizza/pizza2.png",
  },
  {
    id: 4,
    title: "Delicious Pasta",
    category: "pasta",
    price: "$18",
    img: "../images/menu/pasta/pasta1.png",
  },
  {
    id: 5,
    title: "French Fries",
    category: "fries",
    price: "$10",
    img: "../images/menu/fries/fries1.png",
  },
  {
    id: 6,
    title: "Delicious Pizza",
    category: "pizza",
    price: "$5",
    img: "../images/menu/pizza/pizza3.png",
  },
  {
    id: 7,
    title: "Delicious Burger",
    category: "burger",
    price: "$12",
    img: "../images/menu/burger/burger2.png",
  },
  {
    id: 8,
    title: "Delicious Burger",
    category: "burger",
    price: "$14",
    img: "../images/menu/burger/burger3.png",
  },
  {
    id: 9,
    title: "Delicious Pasta",
    category: "pasta",
    price: "$10",
    img: "../images/menu/pasta/pasta2.png",
  },
];

const filters = ["all", "burger", "pizza", "pasta", "fries"];

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  return (
    <div className="py-[14vh] bg-white">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-[2.6rem] text-center mb-10 text-black dancing-script">
          Our Menu
        </h1>

        <ul className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <li
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`cursor-pointer text-[#222831] px-6 py-2 rounded-full text-md capitalize ${
                activeFilter === filter ? "bg-[#222831] text-white" : ""
              }`}
            >
              {filter}
            </li>
          ))}
        </ul>

        <div className="grid min-w-[30vw] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
          {filteredItems.map((item) => (
            <MenuItemTemplate key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/">
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

export default Menu;
