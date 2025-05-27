import React from "react";
import OfferCardTemplate from "./templates/OfferCardTemplate";

const OfferCards = () => {
  const offerCardsData = [
    {
      imageSrc: "/images/offers/offer1.jpg",
      title: "Tasty Thursdays",
      discount: "20%",
      link: "/",
    },
    {
      imageSrc: "/images/offers/offer2.jpg",
      title: "Pizza Days",
      discount: "15%",
      link: "/",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-auto gap-8 py-20">
      {offerCardsData.map((item, index) => {
        return (
          <div key={index} className="lg:flex-1/2 md:flex-1">
            <OfferCardTemplate {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default OfferCards;
