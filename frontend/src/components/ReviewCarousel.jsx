import React, { useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ReviewCard from "./templates/ReviewCardTemplate";

const reviews = [
  {
    id: 0,
    name: "Mike Hamell",
    rating: "★★★★★",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imagePath: "../images/customers/mike-hamell.png",
  },
  {
    id: 1,
    name: "Moana Michell",
    rating: "★★★★★",
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagePath: "../images/customers/moana-michell.png",
  },
  {
    id: 2,
    name: "John Doe",
    rating: "★★★★☆",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imagePath: "../images/customers/mike-hamell.png",
  },
  {
    id: 3,
    name: "Jane Smith",
    rating: "★★★★★",
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imagePath: "../images/customers/moana-michell.png",
  },
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const reviewSlides = [reviews[reviews.length - 1], ...reviews, reviews[0]];

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(reviews.length);
    } else if (currentIndex === reviewSlides.length - 1) {
      setTransitionEnabled(false);
      setCurrentIndex(1);
    }
  };

  const handleLeftClick = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleRightClick = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  //   useEffect(() => {
  //     console.log(currentIndex);
  //   }, [currentIndex]);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();

    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 3000);
    }

    return () => resetTimeout();
  }, [currentIndex, isHovered]);

  useEffect(() => {
    if (!transitionEnabled) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [transitionEnabled]);

  return (
    <div className="h-screen py-20">
      <div className="">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black dancing-script">
            What Says Our Customers
          </h1>
        </div>

        <div
          className="relative overflow-hidden w-full h-[500px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`flex w-full ${
              transitionEnabled
                ? "transition-transform duration-200 ease-linear"
                : ""
            }`}
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {reviewSlides.map((review, i) => (
              <div key={i} className="min-w-[47.4%] mx-[1.3%]">
                <ReviewCard
                  review={{ ...review, name: `${review.name} ${review.id}` }}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handleLeftClick}
              className="w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[#ffbe33] text-white text-3xl"
            >
              {/* ❮ */}
              <BiChevronLeft />
            </button>
            <button
              onClick={handleRightClick}
              className="w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[#ffbe33] text-white text-3xl"
            >
              {/* ❯ */}
              <BiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
