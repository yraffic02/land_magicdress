"use client";
import { useMotionValue, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Modal } from "../Modal/Modal";

export const Carousel = ({ images }) => {
  const carousel = useRef(null);
  const [width, setWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(
        carousel.current.scrollWidth - carousel.current.offsetWidth || 0
      );
    }
  }, []);

  const x = useMotionValue(0);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="flex items-center justify-center w-[90vw]">
      <motion.div
        ref={carousel}
        className="overflow-auto"
        whileTap={{ cursor: "grabbing" }}
        style={{ x }}
      >
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          {images.map((image, index) => (
            <motion.div className="h-[250px] w-[250px] p-2" key={index}>
              <Image
                src={`/vestidos/${image}.webp`}
                height={0}
                width={0}
                alt={image}
                className="object-cover"
                sizes="100vw"
                style={{
                  height: "auto",
                  width: "auto",
                  maxHeight: "250px",
                  maxWidth: "250px",
                }}
                onClick={() => openModal(image)}
                priority
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <Modal isOpen={isOpen} onClose={closeModal} image={selectedImage} />
    </div>
  );
};
