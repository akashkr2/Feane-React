import React, { useEffect, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCircleChevronLeft,
  FaCircleChevronRight,
} from "react-icons/fa6";

const Carousel = ({ images = [], interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start from 1 because of prepended clone
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const timeoutRef = useRef(null);

  const totalSlides = images.length;
  const slideCount = totalSlides + 2; // Including clones

  const startAutoSlide = () => {
    timeoutRef.current = setTimeout(() => {
      goToSlide(currentIndex + 1);
    }, interval);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleTransitionEnd = () => {
    // Jump from cloned slides to real slides
    if (currentIndex === slideCount - 1) {
      setTransitionEnabled(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(totalSlides);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (transitionEnabled) {
      startAutoSlide();
    }
    return () => resetTimeout();
  }, [currentIndex]);

  useEffect(() => {
    if (!transitionEnabled) {
      // Disable transition briefly to jump to real slide
      const timeout = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [transitionEnabled]);

  const getSlides = () => {
    if (images.length === 0) return [];
    return [images[images.length - 1], ...images, images[0]]; // Clone last at start, first at end
  };

  const slides = getSlides();

  return (
    <div
      className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={resetTimeout}
      onMouseLeave={startAutoSlide}
    >
      <div
        className={`flex transition-transform duration-700 ease-in-out ${
          !transitionEnabled ? "!transition-none" : ""
        }`}
        onTransitionEnd={handleTransitionEnd}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx}`}
            className="w-full flex-shrink-0 object-cover h-64 sm:h-96"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => goToSlide(currentIndex - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl rounded-full p-4 bg-black/40 hover:bg-black/80 transition-all"
      >
        {/* <FaChevronLeft /> */}
        <FaCircleChevronLeft />
      </button>
      <button
        onClick={() => goToSlide(currentIndex + 1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl rounded-full p-4 bg-black/40 hover:bg-black/80 transition-all"
      >
        {/* <FaChevronRight /> */}
        <FaCircleChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index + 1)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index + 1 ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
