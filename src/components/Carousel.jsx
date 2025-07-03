import React, { useState } from "react";
import img1 from "../assets/carousel-images/img1.jpg";
import img2 from "../assets/carousel-images/img2.jpg";
import img3 from "../assets/carousel-images/img3.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [img1, img2, img3]; // now using imported images

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel relative w-full h-80 overflow-hidden mb-8">
      <div
        className="carousel-inner relative flex w-full h-full transition-all duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-item w-full h-full flex-shrink-0 flex justify-center items-center"
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
