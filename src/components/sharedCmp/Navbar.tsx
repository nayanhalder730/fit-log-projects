"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navLogo from "@/assets/logo.png";

const links = [
  { Link: "/", name: "Workouts" },
  { Link: "/my-plan", name: "My Plan" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar bg-[#0d0f12] text-white px-4 md:px-6 border-b border-gray-800">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-1 mr-2 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#16181d] rounded-box z-[10] mt-3 w-52 p-2 shadow-xl border border-gray-800"
          >
            {links.map((item) => (
              <li key={item.Link}>
                <Link
                  href={item.Link}
                  className={`py-2 px-4 rounded-lg font-medium ${
                    pathname === item.Link
                      ? "bg-[#ccff00] text-black font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 text-lg md:text-xl font-black tracking-wider"
        >
          <Image src={navLogo} alt="Logo" width={32} height={32} />
          FITLOG
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <div className="bg-[#16181d] p-1 rounded-full flex gap-1 border border-gray-800">
          {links.map((item) => (
            <Link
              key={item.Link}
              href={item.Link}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                pathname === item.Link
                  ? "bg-[#ccff00] text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="navbar-end gap-1 md:gap-2">
        <Link
          href="/my-plan"
          className="btn btn-ghost btn-xs md:btn-sm text-white font-normal hover:bg-gray-800 px-2 md:px-3 flex items-center"
        >
          Plan
          <span className="badge bg-[#ccff00] text-black border-none font-bold text-xs px-1.5 md:px-2">
            0
          </span>
        </Link>
        <Link
          href="/my-plan"
          className="btn btn-ghost btn-xs md:btn-sm text-white font-normal hover:bg-gray-800 px-2 md:px-3 flex items-center"
        >
          Saved
          <span className="badge badge-outline text-white border-gray-600 text-xs px-1.5 md:px-2">
            0
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;