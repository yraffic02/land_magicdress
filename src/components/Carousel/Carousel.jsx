"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Modal } from "../Modal/Modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = ({ images, batchSize = 10 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);
  const [batchIndex, setBatchIndex] = useState(0);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const loadBatch = () => {
    const newImages = images.slice(batchIndex * batchSize, (batchIndex + 1) * batchSize);
    setLoadedImages((prevImages) => [...prevImages, ...newImages]);
  };

  useEffect(() => {
    loadBatch();
  }, [batchIndex]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    afterChange: (current) => {
      if (current + 3 >= loadedImages.length && loadedImages.length < images.length) {
        setBatchIndex((prevIndex) => prevIndex + 1);
      }
    },
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
    <div className="w-[90vw] mx-auto px-2">
      <Slider {...settings}>
        {loadedImages.map((image, index) => (
          <div key={index} className="p-1">
            <Image
              src={`/vestidos/${image}.jpeg`}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                height: 'auto',
                width: 'auto',
                maxHeight: '100%',
                maxWidth: '100%'
              }}
              alt={image}
              className="object-cover"
              onClick={() => openModal(image)}
              priority
            />
          </div>
        ))}
      </Slider>
      <Modal isOpen={isOpen} onClose={closeModal} image={selectedImage} />
    </div>
  );
};
