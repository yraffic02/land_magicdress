"use client";
import { Carousel } from "@/components/Carousel/Carousel";
import { array1, array2, array3, array4 } from "@/configs/constants";
import Link from "next/link";

export default function CatalogPage() {
  
  return (
    <>
      <div className="flex flex-col items-center gap-2">
      <Carousel images={array1} />
      <Carousel images={array2} />
      <Carousel images={array3} />
      <Carousel images={array4} />
      <div className="mt-2">
        <Link 
          href='/catalog/page1'
          className="text-white text-center"
        >
          ir para próxima página
        </Link>
      </div>
    </div>
    </>
  );
}
