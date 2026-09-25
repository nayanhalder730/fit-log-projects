"use client";

import { IWorkout } from "@/type/gymType";
import React, { createContext, useContext, useState } from "react";

interface WorkoutContextType {
  todayWorkout: IWorkout[];
  setTodayWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  savedWorkout: IWorkout[];
  setSavedWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
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

  const sharedState = {
    todayWorkout,
    setTodayWorkout,
    savedWorkout,
    setSavedWorkout,
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