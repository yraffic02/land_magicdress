"use client";
import { Carousel } from "@/components/Carousel/Carousel";
import { array1, array2, array3, array4, array5, array6, array7, array8 } from "@/configs/constants";

export default function CatalogPage() {
  
  return (
    <div className="flex flex-col items-center gap-2">
      <Carousel images={array1} />
      <Carousel images={array2} />
      <Carousel images={array3} />
      <Carousel images={array4} />
    </div>
  );
}
