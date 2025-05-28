import { useEffect, useRef, useState } from "react";

const ads = [
  {
    title: "Fast Food Restaurant",
    description:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
  },
  {
    title: "Fast Food Restaurant",
    description:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
  },
  {
    title: "Fast Food Restaurant",
    description:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
  },
];

const SlidingCarouselAd = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 (after cloned last slide)
  const [activeIndex, setActiveIndex] = useState(0); // Indicator: 0-based
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const extendedAds = [ads[ads.length - 1], ...ads, ads[0]]; // [last, ...ads, first]

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(ads.length);
      setActiveIndex(ads.length - 1); // last real index
    } else if (currentIndex === ads.length + 1) {
      setTransitionEnabled(false);
      setCurrentIndex(1);
      setActiveIndex(0); // first real index
    }
  };

  useEffect(() => {
    if (currentIndex > 0 && currentIndex <= ads.length) {
      setActiveIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();

    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 5000);
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
    <div
      className="px-25 w-full h-[60vh] flex flex-col relative bg-transparent overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`h-full w-full flex ${
          transitionEnabled
            ? "transition-transform duration-700 ease-in-out"
            : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedAds.map((ad, idx) => (
          <div key={idx} className="min-w-[100vw] h-full flex items-center">
            <div className="w-[53%] text-left flex flex-col gap-4">
              <h1 className="text-5xl text-white dancing-script">{ad.title}</h1>
              <p className="text-white">{ad.description}</p>
              <button className=" bg-[#ffbe33] text-white w-fit px-10 py-3 rounded-full hover:bg-[#e69c00] transition">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 flex items-center gap-2">
        {ads.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              activeIndex === idx ? "w-5 h-5 bg-yellow-400" : "bg-white/40"
            }`}
            onClick={() => setCurrentIndex(idx + 1)}
            style={{ cursor: "pointer" }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlidingCarouselAd;
