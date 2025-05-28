import React, { useEffect, useRef, useState } from "react";
import ReviewCard from "./templates/ReviewCardTemplate";

const reviews = [
  {
    id: 1,
    name: "Mike Hamell",
    rating: "★★★★★",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imagePath: "../images/customers/mike-hamell.png",
  },
  {
    id: 2,
    name: "Moana Michell",
    rating: "★★★★★",
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagePath: "../images/customers/moana-michell.png",
  },
  {
    id: 3,
    name: "John Doe",
    rating: "★★★★☆",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imagePath: "../images/customers/mike-hamell.png",
  },
  {
    id: 4,
    name: "Jane Smith",
    rating: "★★★★★",
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imagePath: "../images/customers/moana-michell.png",
  },
];

const ReviewCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const slideNext = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const slidePrev = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const items = [];
    for (let i = 0; i < 2; i++) {
      items.push(reviews[(index + i) % reviews.length]);
    }
    return items;
  };

  return (
    <div className="h-screen py-20">
      <div className="">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black dancing-script">
            What Says Our Customers
          </h1>
        </div>

        <div className="relative overflow-hidden w-full h-[500px]">
          <div
            className={`flex gap-4 transition-transform duration-500 ease-linear w-full 
                
            `}
            style={{ transform: "translateX(0%)" }}
          >
            {getVisibleReviews().map((review, i) => (
              <ReviewCard
                key={i}
                review={{ ...review, name: `${review.name} ${review.id}` }}
              />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={slidePrev}
              className="w-[50px] h-[50px] rounded-full bg-[#ffbe33] text-white flex items-center justify-center text-xl"
            >
              ❮
            </button>
            <button
              onClick={slideNext}
              className="w-[50px] h-[50px] rounded-full bg-[#ffbe33] text-white flex items-center justify-center text-xl"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
