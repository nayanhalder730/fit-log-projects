import React from "react";

export default function FitLogSkeleton() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-8 bg-[#0d0f12] min-h-screen animate-pulse">
      
      {/* 1. FitLog Banner / Hero Section Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12 bg-[#12151c] p-6 md:p-10 rounded-3xl border border-gray-800/80">
        <div className="space-y-4">
          {/* Eyebrow badge */}
          <div className="h-4 bg-gray-800 rounded-full w-32"></div>
          {/* Main Title lines */}
          <div className="h-8 md:h-10 bg-gray-800 rounded-xl w-4/5"></div>
          <div className="h-8 md:h-10 bg-gray-800 rounded-xl w-3/5"></div>
          {/* Subtitle */}
          <div className="h-4 bg-gray-800/60 rounded-full w-full"></div>
          <div className="h-4 bg-gray-800/60 rounded-full w-2/3"></div>
          {/* CTA Button */}
          <div className="pt-2">
            <div className="h-12 bg-gray-800 rounded-full w-48"></div>
          </div>
        </div>
        {/* Banner Right Image Placeholder */}
        <div className="h-60 md:h-72 bg-gray-800/70 rounded-2xl w-full"></div>
      </div>

      {/* 2. Library Header & Sort Dropdown Skeleton */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-gray-800/60 pb-6">
        <div className="space-y-2">
          {/* "THE LIBRARY" Heading */}
          <div className="h-8 bg-gray-800 rounded-lg w-44"></div>
          {/* Subtitle */}
          <div className="h-4 bg-gray-800/60 rounded-full w-64"></div>
        </div>
        {/* Sort Dropdown Placeholder */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <div className="h-4 bg-gray-800/60 rounded w-12"></div>
          <div className="h-10 bg-gray-800 rounded-xl w-36"></div>
        </div>
      </div>

      {/* 3. FitLog 3x4 Grid Workout Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-[#12151c] border border-gray-800/80 rounded-2xl p-4 flex flex-col justify-between gap-4"
          >
            {/* Workout Illustration / Image Placeholder */}
            <div className="h-48 bg-gray-800/80 rounded-xl w-full"></div>

            {/* Category Tag Pills (e.g., CHEST, ARMS) */}
            <div className="flex gap-2">
              <div className="h-6 bg-gray-800 rounded-full w-16"></div>
              <div className="h-6 bg-gray-800 rounded-full w-20"></div>
            </div>

            {/* Workout Name & Equipment Line */}
            <div className="space-y-2">
              <div className="h-6 bg-gray-800 rounded-lg w-3/4"></div>
              <div className="h-4 bg-gray-800/60 rounded-full w-1/2"></div>
            </div>

            {/* Stats Row (Duration, Calories, Rating) */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-800/60">
              <div className="h-4 bg-gray-800/80 rounded-full w-16"></div>
              <div className="h-4 bg-gray-800/80 rounded-full w-16"></div>
              <div className="h-4 bg-gray-800/80 rounded-full w-12"></div>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}