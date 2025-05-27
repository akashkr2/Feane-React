import Carousel from "./Carousel";

const imageUrls = [
  "https://source.unsplash.com/random/800x600?nature,1",
  "https://source.unsplash.com/random/800x600?nature,2",
  "https://source.unsplash.com/random/800x600?nature,3",
];

const CarouselImplementation = () => (
  <div className="p-4">
    <Carousel images={imageUrls} interval={4000} />
  </div>
);

export default CarouselImplementation;
