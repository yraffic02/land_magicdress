import React from "react";
import Image from "next/image";
import Form from "../Form/Form";

export const Modal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 h-full bg-black  flex flex-col  items-center  z-50 modal-backdrop"
    >
      <button
        onClick={onClose}
        className="absolute top-0 right-0 m-1 text-white font-bold p-1 rounded-full bg-yellow-300"
      >
        X
      </button>
      <div className="h-3/4 m-3 ">
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
          className="object-contain shadow-white-md"
        />
      </div>
      <Form image={image} />
    </div>
  );
};
