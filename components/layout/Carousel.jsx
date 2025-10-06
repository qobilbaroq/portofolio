"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const Carousel = ({ onImageClick }) => {
  const [slides, setSlides] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/api/slides", { signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setSlides(data);
          setActiveIndex((prev) =>
            data.length ? Math.min(prev, data.length - 1) : 0
          );
        } else {
          console.warn("Unexpected slides payload", data);
          setSlides([]);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching slides:", err);
          setError(err.message || "Failed to load slides");
        }
      } finally {
        setLoading(false);
      }
    };

    load();

    return () => controller.abort();
  }, []);

  // autoplay: only run when we have slides
  const nextSlide = useCallback(() => {
    if (!slides.length) return;
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    if (!slides.length) return;
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!autoplay || slides.length === 0) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, autoplay, slides.length]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const handleSlideClick = (index) => {
    if (index === activeIndex && onImageClick) {
      onImageClick(index);
    } else {
      setActiveIndex(index);
      setAutoplay(false);
      setTimeout(() => setAutoplay(true), 3000);
    }
  };

  const getSlideStyle = (index) => {
    const total = slides.length;
    const offset = (index - activeIndex + total) % total;
    const realOffset = offset > total / 2 ? offset - total : offset;

    let transform = "";
    let opacity = 0;
    let zIndex = 1;
    let filter = "blur(4px)";

    switch (realOffset) {
      case 0:
        transform = `translateX(0) translateZ(150px) rotateY(0deg) scale(1)`;
        opacity = 1;
        zIndex = 5;
        filter = "blur(0px)";
        break;
      case -1:
        transform = `translateX(-440px) translateZ(-120px) rotateY(100deg) scale(0.85)`;
        opacity = 0.8;
        zIndex = 3;
        filter = "blur(1px)";
        break;
      case 1:
        transform = `translateX(440px) translateZ(-120px) rotateY(-100deg) scale(0.85)`;
        opacity = 0.8;
        zIndex = 3;
        filter = "blur(1px)";
        break;
      case -2:
        transform = `translateX(-690px) translateZ(-140px) rotateY(100deg) scale(0.85)`;
        opacity = 0.5;
        zIndex = 2;
        filter = "blur(2px)";
        break;
      case 2:
        transform = `translateX(690px) translateZ(-140px) rotateY(-100deg) scale(0.85)`;
        opacity = 0.5;
        zIndex = 2;
        filter = "blur(2px)";
        break;
      default:
        transform = `translateX(0) translateZ(-500px) scale(0.5)`;
        opacity = 0;
        zIndex = 1;
        filter = "blur(4px)";
        break;
    }

    return { transform, opacity, zIndex, filter };
  };

  return (
    <div className="relative w-full flex flex-col items-center -mt-15">
      {/* Carousel Wrapper */}
      <div
        className="relative w-full flex justify-center items-center perspective"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {slides.map((item, index) => (
          <div
            key={index}
            className="absolute transition-all duration-700 ease-in-out cursor-pointer"
            style={getSlideStyle(index)}
            onClick={() => handleSlideClick(index)}
          >
            <Image
              src={item.image}
              alt={`Slide ${index + 1}`}
              width={380}
              height={214}
              className="shadow-lg object-cover rounded-none border-0"
              priority={index === activeIndex}
            />
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="w-full max-w-[600px] text-center -mt-15 mb-5 transition-opacity duration-500 ease-in-out">
        {slides.length > 0 ? (
          <p
            key={activeIndex}
            className="text-sm text-gray-600 font-light leading-relaxed"
          >
            {slides[activeIndex]?.description ?? ""}
          </p>
        ) : (
          <p className="text-sm text-gray-600 font-light leading-relaxed">
            No slides available
          </p>
        )}
      </div>
    </div>
  );
};

export default Carousel;
