"use client";

import MyPlanDetailsCard from "@/components/homePage/MyPlanDetailsCard";
import { useWorkoutContext } from "@/contex/WorkoutContex";

const MyPlanPage = () => {
  const { todayWorkout, savedWorkout } = useWorkoutContext();

  console.log("Today Workout:", todayWorkout);
  console.log("Saved Workout:", savedWorkout);

  return (
    <div>
      {
        todayWorkout.map((workout) => (
          <MyPlanDetailsCard key={workout.id} workout={workout} />
        ))
      }

    </div>
  );
};

export default MyPlanPage;
