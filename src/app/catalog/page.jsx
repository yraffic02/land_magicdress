"use client";
import { Carousel } from "@/components/Carousel/Carousel";

export default function CatalogPage() {
  const array1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const array2 = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
  const array3 = [
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  return (
    <div className="flex flex-col gap-2">
      <Carousel images={array1} />
      <Carousel images={array2} />
      <Carousel images={array3} />
    </div>
  );
}
