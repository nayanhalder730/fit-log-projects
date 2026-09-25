"use client";

import Image from "next/image";
import Link from "next/link";
import { Bounce, toast } from "react-toastify";

type WorkoutItem = {
  id: string | number;
  image: string;
  name: string;
  equipment: string;
  duration?: number;
  caloriesBurned?: number;
  rating?: number;
};

type MyPlanDetailCardProps = {
  item: WorkoutItem;
  onDone: (id: string | number) => void;
  onRemove: (id: string | number) => void;
};

const MyPlanDetailCard = ({
  item,
  onDone,
  onRemove,
}: MyPlanDetailCardProps) => {
  // Mark as Done
  const handleDone = () => {
    onDone(item.id);

    toast.success(`"${item.name}" completed! Great job! 🎉`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  // Remove
  const handleRemove = () => {
    onRemove(item.id);

    toast.success(`"${item.name}" removed from your plan!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="bg-[#12151c] border border-gray-800/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      
      {/* Workout Info */}
      <div className="flex items-center gap-4 min-w-0">
        
        {/* Image */}
        <div className="relative w-28 h-20 sm:w-32 sm:h-20 rounded-xl overflow-hidden bg-gray-900 shrink-0 border border-gray-800">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Name + Equipment + Stats */}
        <div className="space-y-1 min-w-0">
          <h3 className="font-extrabold text-white text-base uppercase tracking-wide truncate">
            {item.name}
          </h3>

          <p className="text-xs text-gray-400 font-medium">
            {item.equipment}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-gray-300 font-medium">

            {/* Duration */}
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              {item.duration ?? 0} min
            </span>

            {/* Calories */}
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5 text-[#ccff00]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 22c4.42 0 8-3.13 8-7 0-2.9-1.7-5.2-4.2-6.8.2 1.8-.5 3.3-1.8 4.3.2-3.5-1.7-6.6-4.8-8.5.2 2.7-.7 4.7-2.2 6.3C5.8 11.7 4 13.5 4 16c0 3.87 3.58 6 8 6Z"
                />
              </svg>

              {item.caloriesBurned ?? 0} kcal
            </span>

            {/* Rating */}
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              {item.rating ?? 0}
            </span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 border-gray-800/60 pt-3 sm:pt-0">

        {/* View Details */}
        <Link
          href={`/my-plan/${item.id}`}
          className="bg-[#1c202b] hover:bg-gray-800 border border-gray-700/60 text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all"
        >
          View Details
        </Link>

        {/* Mark as Done */}
        <button
          type="button"
          onClick={handleDone}
          className="bg-[#ccff00] hover:bg-[#b8e600] text-black text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer"
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

        {/* Remove */}
        <button
          type="button"
          onClick={handleRemove}
          className="p-1.5 text-gray-500 hover:text-white transition-all ml-1 cursor-pointer"
          title="Remove"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MyPlanDetailCard;

