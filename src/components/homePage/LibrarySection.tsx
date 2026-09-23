import { fetchALLData } from '@/lib/fetchALLData';
import React from 'react';
import WorkoutCard from './WorkoutCard';
import { IWorkout } from "@/type/gymType";

const LibrarySection = async () => {
    const fetchData = await fetchALLData();
    return (
        <section id="library" className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            THE LIBRARY
          </h2>

          <p className="text-gray-400 mt-2">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fetchData.map((workout: IWorkout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </section>
    );
};

export default LibrarySection;