import React from "react";
import Image from "next/image";

export const Modal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-white  flex  justify-center z-50 modal-backdrop"
    >
      <button
        onClick={onClose}
        className="absolute top-0 right-0 m-1 text-black p-1 rounded-full bg-white"
      >
        X
      </button>
      <Image
        src={`/vestidos/${image}.jpeg`}
        alt={image}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          height: 'auto',
          width: 'auto',
          maxHeight: '100%',
          maxWidth: '100%'
        }}
        className="object-contain"
      />
    </div>
  );
};
