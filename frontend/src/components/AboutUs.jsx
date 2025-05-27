import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#222831] py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-0">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/aboutUs/burger-3d.png"
              alt="3D Burger"
              className="h-[95vh] object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 text-white flex flex-col justify-center gap-5">
            <h1 className="text-4xl m-0 dancing-script">We Are Feane</h1>
            <p className="text-[1.05rem] leading-relaxed">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
            <button
              className="text-white bg-[#ffbe33] rounded-full text-[1.05rem] px-6 py-[0.65rem] w-[26%] outline-none border-none cursor-pointer 
             hover:bg-[#e69c00] active:bg-[#e69d007f] transition duration-300"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
