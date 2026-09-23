import React from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-[#0f1115] p-4 md:p-8">
      <div className="container mx-auto bg-[#14161d] rounded-2xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-800/50">

        <div className="flex-1 space-y-6 text-left">
          <span className="text-[#ccff00] font-bold text-xs md:text-sm tracking-widest uppercase">
            WORKOUT LIBRARY
          </span>

          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-xl font-normal leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div>
            <Link
              href="#library"
              className="inline-flex items-center gap-2 bg-[#ccff00] hover:bg-[#b3e600] text-black font-extrabold text-xs md:text-sm px-6 py-3.5 rounded-lg transition-all tracking-wider uppercase"
            >
              BROWSE WORKOUTS

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end w-full max-w-md md:max-w-none">
          <Image
            src={bannerImage}
            alt="Gym Workout Machine"
            priority
            className="w-full max-w-sm md:max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;