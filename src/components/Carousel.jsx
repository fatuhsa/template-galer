import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
    "https://via.placeholder.com/800x400?text=Slide+4",
    "https://via.placeholder.com/800x400?text=Slide+5",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (slides.length * 2)); // Double the length to make it continuous
    }, 3500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${(currentIndex % slides.length) * 100}%)`,
        }}
      >
        {slides.concat(slides).map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 h-auto object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
