
"use client";

import { useWorkoutContext } from "@/contex/WorkoutContex";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MyPlanDetailCard from "@/components/homePage/MyPlanDetailsCard";

const MyPlanPage = () => {
  const {
    todayWorkout,
    setTodayWorkout,
    savedWorkout,
    setSavedWorkout,
  } = useWorkoutContext();

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<
    "duration" | "calories" | "rating"
  >("duration");
  const [toast, setToast] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  const rawList =
    activeTab === "today" ? todayWorkout : savedWorkout;

  const totalExercises = rawList.length;

  const totalMinutes = rawList.reduce(
    (acc, item) => acc + (item.duration || 0),
    0
  );

  const totalCalories = rawList.reduce(
    (acc, item) => acc + (item.caloriesBurned || 0),
    0
  );

  const currentList = [...rawList].sort((a, b) => {
    if (sortBy === "duration") {
      return (b.duration || 0) - (a.duration || 0);
    }

    if (sortBy === "calories") {
      return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
    }

    if (sortBy === "rating") {
      return (b.rating || 0) - (a.rating || 0);
    }

    return 0;
  });

  const handleDone = (id: string | number) => {
    if (activeTab === "today") {
      setTodayWorkout((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } else {
      setSavedWorkout((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }

    showToast("Workout marked as done!");
  };

  const handleRemove = (id: string | number) => {
    if (activeTab === "today") {
      setTodayWorkout((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } else {
      setSavedWorkout((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }

    showToast("Workout removed!");
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-white">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-white">
          MY PLAN
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="bg-[#12151c] border border-gray-800/80 rounded-2xl p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-800">
        <div className="flex flex-col justify-center md:px-6 first:pl-0">
          <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider">
            Exercises
          </span>

          <span className="text-4xl font-black text-[#ccff00] mt-2">
            {totalExercises}
          </span>
        </div>

        <div className="flex flex-col justify-center pt-4 md:pt-0 md:px-8">
          <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider">
            Minutes
          </span>

          <span className="text-4xl font-black text-white mt-2">
            {totalMinutes}
          </span>
        </div>

        <div className="flex flex-col justify-center pt-4 md:pt-0 md:px-8">
          <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider">
            Calories
          </span>

          <span className="text-4xl font-black text-white mt-2">
            {totalCalories}
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="bg-[#12151c] border border-gray-800/80 p-1 rounded-xl flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("today")}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "today"
                ? "bg-[#1c202b] text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "saved"
                ? "bg-[#1c202b] text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-xs text-gray-400 font-medium">
            Sort By
          </span>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as
                    | "duration"
                    | "calories"
                    | "rating"
                )
              }
              className="bg-[#12151c] border border-gray-800 text-xs text-white rounded-xl px-4 py-2 pr-8 appearance-none focus:outline-none cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="border border-dashed border-gray-800/80 rounded-3xl p-20 text-center">
          <p className="text-gray-400 text-sm font-semibold animate-pulse">
            Loading workouts…
          </p>
        </div>
      ) : currentList.length === 0 ? (
        <div className="border border-dashed border-gray-800/80 bg-[#0d0e12] rounded-3xl p-12 sm:p-20 text-center flex flex-col items-center justify-center">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white mb-2">
            NOTHING HERE YET
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm max-w-md mb-6 leading-relaxed">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full transition-all shadow-md shadow-[#ccff00]/10"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {currentList.map((item) => (
            <MyPlanDetailCard
              key={item.id}
              item={item}
              onDone={handleDone}
              onRemove={handleRemove}
            />
          ))}
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12151c] border border-gray-700 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2">
          <span className="text-[#ccff00] font-bold">✓</span>

          <span className="text-sm font-semibold">
            {toast}
          </span>
        </div>
      )}
    </div>
  );
};

export default MyPlanPage;
