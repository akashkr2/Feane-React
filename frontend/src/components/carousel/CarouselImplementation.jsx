import Carousel from "./Carousel";
import img from "./image1.png";

const imageUrls = ["./image1.png", "./image2.png"];

const CarouselImplementation = () => (
  <div className="p-4">
    <img />
    <Carousel images={imageUrls} interval={4000} />
  </div>
);

export default CarouselImplementation;
