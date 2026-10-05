import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {

    const lists = <>
        <li><Link href={''}>Workouts</Link></li>
        <li><Link href={''}>My Plan</Link></li>
    </>

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
          <Link href={''} className="text-xl font-medium flex gap-2 outline-none">
            <Image src={logo} alt="logo" ></Image>
            FITLOG
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {lists}
          </ul>
        </div>
        <div className="navbar-end gap-6">
          <button>Plan</button>
          <button>Saved</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
