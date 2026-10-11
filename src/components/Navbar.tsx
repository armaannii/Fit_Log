'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import { WorkoutContext } from "@/contexts/WorkoutContext";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const {plans, saves} = useContext(WorkoutContext);

    const pathname = usePathname(); 
    const getLinkClasses = (path: string) => {
      const isActive = pathname === path;
      
      return isActive
        ? "bg-[#233116] text-[#9cff00] font-medium px-4 py-1.5 rounded-full transition-colors"
        : "text-gray-400 hover:text-white font-medium px-4 py-1.5 rounded-full transition-colors";
    };

    const navLinks = [
      { name: "Workouts", href: "/workouts" },
      { name: "My Plan", href: "/myplan" },
    ];

    const lists = (
      <>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={getLinkClasses(link.href)}>
              {link.name}
            </Link>
          </li>
        ))}
      </>
    );

    // const lists = <>
    //     <li><Link href="/workouts">Workouts</Link></li>
    //     <li><Link href={'/myplan'}>My Plan</Link></li>
    // </>

    return (
    <div className="border-b-2 border-[#1C1F26]">
      <div className="navbar container mx-auto bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {lists}
            </ul>
          </div>
          <Link href="/" className="text-xl font-medium flex gap-2 outline-none">
            <Image src={logo} alt="logo" ></Image>
            FITLOG
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {lists}
          </ul>
        </div>
        <div className="navbar-end gap-3 sm:gap-6">
          <button>
            <Link href="/myplan"  className=" outline-none"> Plan <span className=" rounded-[46%] font-medium p-0.75 text-black bg-[#9cff00]"> {plans.length} </span> </Link>
          </button>
          <button>
            <Link href="/myplan" className=" outline-none"> Saved <span className="rounded-[45%] font-medium p-0.75 text-[#8A92A0] border-2 border-[#24242d]"> {saves.length} </span> </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
