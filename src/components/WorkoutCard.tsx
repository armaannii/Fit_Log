
import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import React from "react";

import { Oswald } from "next/font/google";
import Link from "next/link";

const oswald = Oswald({
  subsets: ["latin"],
});

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workouts/${workout.id}`} className="outline-none">
      <div className="w-full max-w-116 overflow-hidden rounded-2xl border border-white/10 bg-[#17151d] text-white shadow-lg">

        {/* Image */}
        <div className="h-44 w-full overflow-hidden sm:h-48 md:h-50">
          <Image
            src={workout.image}
            alt={workout.name}
            width={500}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">

          {/* Muscle Groups */}
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="rounded-full bg-[#9cff00] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h2 className={`mb-1 text-xl font-bold uppercase sm:text-2xl ${oswald.className}`}>
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="text-sm text-gray-400">
            {workout.equipment}
          </p>

          {/* Divider */}
          <div className="my-3 h-px bg-white/10" />

          {/* Bottom Information */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 sm:gap-x-6 sm:text-sm">

            {/* Duration */}
            <div className="flex items-center gap-2">
              <span className="text-lg">◷</span>
              <span>{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <span className="text-lg">♟</span>
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="text-lg">☆</span>
              <span>{workout.rating}</span>
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
