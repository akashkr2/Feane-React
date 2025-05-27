import { useEffect, useState } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, ads.length]);

  return (
    <div
      id="sliderSec"
      className="px-25 w-full h-[60vh] flex flex-col relative bg-transparent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="h-full w-full flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {ads.map((ad, idx) => (
          <div key={idx} className="min-w-[100vw] h-full flex items-center">
            <div className="w-[53%] text-left flex flex-col gap-4">
              <h1 className="text-5xl text-white dancing-script">
                {ad.title}
              </h1>
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
              currentIndex === idx ? "w-5 h-5 bg-yellow-400" : "bg-white/40"
            }`}
            onClick={() => setCurrentIndex(idx)}
            style={{ cursor: "pointer" }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlidingCarouselAd;
