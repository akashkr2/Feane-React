import Carousel from "./CarouselTemplate";

const imageUrls = [
  "/try/image1.png",
  "/try/image2.png",
  "/try/image3.png",
  "/try/image4.png",
  "/try/image5.png",
  "/try/image6.png",
  "/try/image7.png",
  "/try/image8.png",
  "/try/image9.png",
];

const CarouselImplementation = () => (
  <div className="p-4">
    <img />
    <Carousel interval={3000}>
      {/* <div className="bg-black flex items-center justify-center h-[20vh] w-full">Hello</div>
      <div>Hello</div>
      <div>World</div>
      <div>Hello</div> */}
      {imageUrls.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx}`}
            className="w-full flex-shrink-0 object-cover h-64 sm:h-96"
          />
        ))}
    </Carousel>
  </div>
);

export default CarouselImplementation;
