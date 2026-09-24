"use client";

import { useWorkoutContext } from "@/contex/WorkoutContex";

const MyPlanPage = () => {
  const { todayWorkout, savedWorkout } = useWorkoutContext();

  console.log("Today Workout:", todayWorkout);
  console.log("Saved Workout:", savedWorkout);

  return (
    <div>

    </div>
  );
};

export default MyPlanPage;
