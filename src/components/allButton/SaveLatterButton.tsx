"use client";

import { useWorkoutContext } from "@/contex/WorkoutContex";
import { IWorkout } from "@/type/gymType";
import { Bounce, toast } from "react-toastify";

interface SaveLatterButtonProps {
  workout: IWorkout;
}

const SaveLatterButton = ({ workout }: SaveLatterButtonProps) => {
  const { savedWorkout, setSavedWorkout } = useWorkoutContext();

  const handleSaveForLater = () => {
    const isAlreadySaved = savedWorkout.some((w) => w.id === workout.id);

    if (!isAlreadySaved) {
      setSavedWorkout((prev) => [...prev, workout]);
      toast.success("Workout saved for later!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.info("This workout is already saved!", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div>
      <button
        type="button"
        className="bg-transparent hover:bg-gray-800/60 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-gray-700 transition-all flex items-center gap-2 cursor-pointer"
        onClick={handleSaveForLater}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
        Save for later
      </button>
    </div>
  );
};

export default SaveLatterButton;