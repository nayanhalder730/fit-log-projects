"use client";

import { IWorkout } from "@/type/gymType";
import React, { createContext, useContext, useState } from "react";

interface WorkoutContextType {
  todayWorkout: IWorkout[];
  setTodayWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  savedWorkout: IWorkout[];
  setSavedWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  removeWorkoutFromToday: (id: string | number) => void;
  removeWorkoutFromSaved: (id: string | number) => void;
  markAsDone: (id: string | number) => void;
}

export const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined
);

interface WorkoutContextProps {
  children: React.ReactNode;
}

const WorkoutProvider = ({ children }: WorkoutContextProps) => {
  const [todayWorkout, setTodayWorkout] = useState<IWorkout[]>([]);
  const [savedWorkout, setSavedWorkout] = useState<IWorkout[]>([]);

  const removeWorkoutFromToday = (id: string | number) => {
    setTodayWorkout((prev) =>
      prev.filter((item) => (item.id ?? item._id) !== id)
    );
  };

  const removeWorkoutFromSaved = (id: string | number) => {
    setSavedWorkout((prev) =>
      prev.filter((item) => (item.id ?? item._id) !== id)
    );
  };

  const markAsDone = (id: string | number) => {
    setTodayWorkout((prev) =>
      prev.map((item) =>
        (item.id ?? item._id) === id ? { ...item, completed: true } : item
      )
    );
  };

  const sharedState = {
    todayWorkout,
    setTodayWorkout,
    savedWorkout,
    setSavedWorkout,
    removeWorkoutFromToday,
    removeWorkoutFromSaved,
    markAsDone,
  };

  return (
    <WorkoutContext.Provider value={sharedState}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useWorkoutContext must be used within a WorkoutProvider");
  }
  return context;
};