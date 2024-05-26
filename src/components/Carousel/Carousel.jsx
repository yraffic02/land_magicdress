"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Modal } from "../Modal/Modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[90vw] mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <Image
              src={`/vestidos/${image}.webp`}
              height={250}
              width={250}
              alt={image}
              className="object-cover relative"
              onClick={() => openModal(image)}
              priority
            />
            <Image
              src="/logo.png"
              className="absolute bottom-5"
              height={30}
              width={30}
              alt="logo"
              priority
            />
          </div>
        ))}
      </Slider>
      <Modal isOpen={isOpen} onClose={closeModal} image={selectedImage} />
    </div>
  );
};
