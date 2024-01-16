import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel text-center justify-center flex w-3/5 lg:w-full items-center"
      >
        {images.map((img) => (
          <img
            src={img.attributes.url}
            key={img.id}
            alt={img.attributes.name}
            className=""
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
