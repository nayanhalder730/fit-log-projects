import { IWorkout } from '@/type/gymType';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  const { name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = workout;

  return (
    <Link
      href={`/my-plan/${workout.id}`}
      className="block bg-[#14161d] rounded-2xl overflow-hidden border border-gray-800/60 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 shadow-md"
    >
    
      <div className="relative w-full h-52 bg-gray-900">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

   
      <div className="p-5 space-y-3">
   
        <div className="flex flex-wrap gap-2">
          {muscleGroups?.map((group, index) => (
            <span
              key={index}
              className="bg-[#ccff00] text-black font-extrabold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full"
            >
              {group}
            </span>
          ))}
        </div>

       
        <div>
          <h3 className="text-white text-xl font-black uppercase tracking-wide">
            {name}
          </h3>
          <p className="text-gray-400 text-xs font-medium mt-1">
            {equipment}
          </p>
        </div>

 
        <div className="pt-3 border-t border-gray-800/80 flex items-center justify-start gap-6 text-gray-400 text-xs font-medium">
    
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="9" strokeWidth="2" />
              <path strokeWidth="2" strokeLinecap="round" d="M12 7v5l3 2" />
            </svg>
            <span>{duration} min</span>
          </div>


          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-400 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c0 0-5 4-5 8.5C7 13.5 9.2 16 12 16s5-2.5 5-5.5C17 6 12 2 12 2z" />
            </svg>
            <span>{caloriesBurned} kcal</span>
          </div>

  
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <polygon
                strokeWidth="2"
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              />
            </svg>
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;