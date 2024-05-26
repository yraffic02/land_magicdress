import { AnimatedButton } from "@/components/Buttons/AnimatedButton";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <Link
        className="w-1/2"
        href="https://www.google.com.br/maps/place/Magic+Dress/@-2.5071949,-44.2973363,20.7z/data=!4m6!3m5!1s0x7f68faf8f4949d3:0x44d7a8bc71419c0f!8m2!3d-2.5071724!4d-44.2972285!16s%2Fg%2F11y47lm1qk?entry=ttu"
      >
        <AnimatedButton title="Localização" />
      </Link>
      <Link
        className="w-1/2"
        href="https://wa.me/5598986003440"
        target="_blank"
      >
        <AnimatedButton title="WhatsApp" />
      </Link>
      <Link className="w-1/2" href="https://www.instagram.com/magicdress.br/">
        <AnimatedButton title="Instagram" />
      </Link>
      <Link className="w-1/2" href="/catalog">
        <AnimatedButton title="Catálogo" />
      </Link>
    </main>
  );
}
