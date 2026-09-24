import { IWorkout } from "@/type/gymType";
import Image from "next/image";
import AddPlanButton from "../allButton/AddPlanButton";
import SaveLatterButton from "../allButton/SaveLatterButton";

interface DetailsProps {
  workout: IWorkout;
}

const Details = ({ workout }: DetailsProps) => {
  const {
    name,
    image,
    description,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions,
  } = workout;

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

        <div className="relative w-full h-full min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden bg-gray-900 border border-gray-800">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>


        <div className="space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
   
            <div>
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-white">
                {name}
              </h1>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {muscleGroups?.map((group, index) => (
                <span
                  key={index}
                  className="bg-[#ccff00] text-black font-extrabold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full"
                >
                  {group}
                </span>
              ))}
            </div>

    
            <div className="bg-[#14161d] rounded-2xl p-5 border border-gray-800/80 space-y-3.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center py-1 border-b border-gray-800/60">
                <span className="text-gray-400 font-semibold uppercase tracking-wider">
                  Equipment
                </span>
                <span className="font-bold text-white">{equipment}</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-gray-800/60">
                <span className="text-gray-400 font-semibold uppercase tracking-wider">
                  Difficulty
                </span>
                <span className="font-bold text-white">{difficulty}</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-gray-800/60">
                <span className="text-gray-400 font-semibold uppercase tracking-wider">
                  Sets
                </span>
                <span className="font-bold text-white">{sets}</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-gray-800/60">
                <span className="text-gray-400 font-semibold uppercase tracking-wider">
                  Reps
                </span>
                <span className="font-bold text-white">{reps}</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-gray-800/60">
                <span className="text-gray-400 font-semibold uppercase tracking-wider">
                  Duration
                </span>
                <span className="font-bold text-white">{duration} min</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-gray-800/60">
                <span className="text-gray-400 font-semibold uppercase tracking-wider">
                  Calories
                </span>
                <span className="font-bold text-white">{caloriesBurned} kcal</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-gray-400 font-semibold uppercase tracking-wider">
                  Rating
                </span>
                <span className="font-bold text-white">{rating}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-white font-black uppercase text-base tracking-wide">
                Instructions
              </h3>
              <ol className="space-y-2 text-gray-300 text-xs sm:text-sm leading-relaxed">
                {instructions?.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="font-bold text-gray-400">{index + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <AddPlanButton workout={workout} />
            <SaveLatterButton workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;