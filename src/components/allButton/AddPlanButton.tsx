"use client";

import { useWorkoutContext } from "@/contex/WorkoutContex";
import { IWorkout } from "@/type/gymType";
import { Bounce, toast } from "react-toastify";

interface AddPlanButtonProps {
  workout: IWorkout;
}

const AddPlanButton = ({ workout }: AddPlanButtonProps) => {
  const { todayWorkout, setTodayWorkout } = useWorkoutContext();

  const handleAddToPlan = () => {
    const isAlreadyAdded = todayWorkout.some((w) => w.id === workout.id);

    if (!isAlreadyAdded) {
      setTodayWorkout((prev) => [...prev, workout]);
      toast.success("Workout added to today's plan!", {
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
    } else {
      toast.info("This workout is already in today's plan!", {
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
        className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
        onClick={handleAddToPlan}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        Add to today's plan
      </button>
    </div>
  );
};

export default AddPlanButton;