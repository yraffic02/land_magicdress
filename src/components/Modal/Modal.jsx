import React, { useState } from "react";
import Image from "next/image";

export const Modal = ({ isOpen, onClose, image }) => {
  const [loading, setLoading] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-4 rounded">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2 text-black"
        >
          X
        </button>
        <Image
          src={`/vestidos/${image}.webp`}
          alt={image}
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </div>
  );
};
