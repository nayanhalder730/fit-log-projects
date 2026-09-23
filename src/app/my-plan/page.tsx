import WorkoutCard from "@/components/homePage/WorkoutCard";
import { fetchALLData } from "@/lib/fetchALLData";
import { IWorkout } from "@/type/gymType";
import React from "react";

const MyPlanPage = async () => {
  const WorkoutData: IWorkout[] = (await fetchALLData()) || [];

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {WorkoutData.map((workout: IWorkout) => (
        <WorkoutCard
          key={workout.id}
          workout={workout}
        />
      ))}
    </div>
  );
};

export default MyPlanPage;