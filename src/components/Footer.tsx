import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-2 border-[#1C1F26]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row h-auto sm:h-22 items-center justify-between py-6 sm:py-0 gap-4 sm:gap-0">
          
          {/* Logo */}
          
          <Link href={"/"} className="flex items-center gap-2 outline-none" >
              <Image src={logo} alt="Footer logo" className="text-xl text-[#9cff00]" />
              <span className="text-sm font-bold tracking-wide text-white"> FITLOG </span>
          </Link>
          

          {/* Copyright */}
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;  