import { IWorkout } from "@/type/gymType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MyPlanDetailsCardProps {
  workout: IWorkout;
}

const MyPlanDetailsCard = ({ workout }: MyPlanDetailsCardProps) => {
  return (
    <div className="bg-[#12151c] border border-gray-800/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

      <div className="flex items-center gap-4">
   
        <div className="relative w-28 h-20 sm:w-32 sm:h-20 rounded-xl overflow-hidden bg-gray-900 shrink-0 border border-gray-800">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>


        <div className="space-y-1">
          <h3 className="font-extrabold text-white text-base uppercase tracking-wider">
            {workout.name}
          </h3>
          <p className="text-xs text-gray-400 font-medium">
            {workout.equipment}
          </p>

  
          <div className="flex items-center gap-3 pt-1 text-xs text-gray-300 font-medium">
   
            <span className="flex items-center gap-1.5 text-gray-300">
              <svg
                className="w-4 h-4 text-[#ccff00]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {workout.duration} min
            </span>

       
            <span className="flex items-center gap-1.5 text-gray-300">
              <svg
                className="w-4 h-4 text-[#ccff00]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c1.15 2.8 2.3 4.2 3.8 5.6 1.8 1.7 3.2 3.6 3.2 6.4 0 5-4 9-9 9s-9-4-9-9c0-3.3 1.8-6.1 4.5-7.7.3 1.8 1.4 3.2 2.5 4.2 1.3 1.2 2.8 2.2 2.8 4.3 0 1.2-.8 2.2-2 2.7 1.4.2 2.8-.2 3.7-1.1 1.4-1.4 1.8-3.5 1.2-5.3-.4-1.2-1.3-2.2-2.1-3.2-.8-.9-1.5-1.9-2.1-3-.5-.9-.8-1.9-1-2.9z" />
              </svg>
              {workout.caloriesBurned} kcal
            </span>

    
            <span className="flex items-center gap-1.5 text-gray-300">
              <svg
                className="w-4 h-4 text-[#ccff00]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              {workout.rating}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 border-gray-800/60 pt-3 sm:pt-0">
        <Link
          href={`/my-plan/${workout.id}`}
          className="bg-[#181c26] hover:bg-gray-800 border border-gray-700/60 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all"
        >
          View Details
        </Link>

        <button
          type="button"
          className="bg-[#ccff00] hover:bg-[#b8e600] text-black text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <svg
            className="w-3.5 h-3.5 stroke-[3]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Mark as Done
        </button>

        <button
          type="button"
          className="p-1 text-gray-500 hover:text-white transition-all ml-1 cursor-pointer"
          title="Remove"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MyPlanDetailsCard;