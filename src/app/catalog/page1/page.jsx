"use client";
import { Carousel } from "@/components/Carousel/Carousel";
import { array5, array6, array7, array8 } from "@/configs/constants";
import Link from "next/link";

export default function CatalogPage1() {
  
  return (
    <div className="flex flex-col items-center gap-2">
      <Carousel images={array5} />
      <Carousel images={array6} />
      <Carousel images={array7} />
      <Carousel images={array8} />
      <div className="mt-2">
        <Link 
          href='catalog'
          className="text-white"
        >
          voltar para página anterior
        </Link>
      </div>
    </div>
  );
}
