import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="w-full h-full relative">
      <div className="bg-[#222831] w-full h-[57%] flex flex-col justify-between text-white p-6 rounded-md">
        <p className="mb-4">{review.review}</p>
        <h6 className="font-bold text-lg">{review.name}</h6>
        {/* <span className="text-sm">{review.rating}</span> */}
        <span className="">magna aliqua</span>
      </div>
      <div className="mt-8 relative">
        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-b-[#ffbe33] absolute -top-[13px] left-[calc(130px/2)] -translate-x-1/2" />
        <div className="w-[115px] h-[115px] rounded-full border-[6px] border-[#ffbe33] overflow-hidden">
          <img src={review.imagePath} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
