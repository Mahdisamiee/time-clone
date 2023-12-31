"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/30 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-vazir text-2xl">
            <Image
              src="/logo.png"
              alt="Time logo"
              width="30"
              height="30"
              className="ml-2 rounded-sm"
            ></Image>
            <p> هرچی.اپ | هرچی که بگی !</p>
          </Link>
        </div>
      </div>
    </>
  );
}
