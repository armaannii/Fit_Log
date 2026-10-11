
import { Oswald } from "next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
});

import Image from "next/image";
import React from "react";
import AddToPlanButton from "@/components/interactive-button/AddToPlanButton";
import SaveForLaterButton from "@/components/interactive-button/SaveForLaterButton";
import { notFound } from "next/navigation";

const getData = async (id: string) => {
  try {
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    // console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Data is not available", error);
  }
};

const WorkoutDetailsPage = async ({ params }: { params: Promise<{ workoutId: string }> }) => {
  const { workoutId } = await params;
  const workout = await getData(workoutId);
  // console.log(workout);

  if (!workout) {
    notFound();
  }

  return (
    <main className="container mx-auto my-10 min-h-screen px-4 py-5 text-white sm:my-14 sm:px-6 sm:py-6 lg:my-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-[1fr_1fr] lg:gap-8">

        {/* Image */}
        <div className="overflow-hidden rounded-lg">
          <Image
            src={workout.image}
            alt={workout.name}
            width={500}
            height={300}
            className="h-64 w-full object-cover sm:h-80 md:h-full md:min-h-80"
          />
        </div>

        {/* Details */}
        <div className="flex min-w-0 flex-col">

          {/* Title */}
          <h1 className={`text-xl font-extrabold uppercase tracking-wide sm:text-2xl ${oswald.className}`}>
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-2 text-sm leading-relaxed text-gray-400 sm:text-[16px]">
            {workout.description}
          </p>

          {/* Muscle groups */}
          <div className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle: string, index: number) => (
              <span
                key={index}
                className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout information */}
          <div className="mt-4 overflow-hidden rounded-lg border border-gray-800 bg-[#151620] text-xs font-medium sm:text-[14px]">

            <div className="flex justify-between gap-3 border-b border-gray-800 px-3 py-3 sm:px-4">
              <span className="uppercase text-gray-400">Equipment</span>
              <span className="text-right">{workout.equipment}</span>
            </div>

            <div className="flex justify-between gap-3 border-b border-gray-800 px-3 py-3 sm:px-4">
              <span className="uppercase text-gray-400">Difficulty</span>
              <span className="text-right">{workout.difficulty}</span>
            </div>

            <div className="flex justify-between gap-3 border-b border-gray-800 px-3 py-3 sm:px-4">
              <span className="uppercase text-gray-400">Sets</span>
              <span className="text-right">{workout.sets}</span>
            </div>

            <div className="flex justify-between gap-3 border-b border-gray-800 px-3 py-3 sm:px-4">
              <span className="uppercase text-gray-400">Reps</span>
              <span className="text-right">{workout.reps}</span>
            </div>

            <div className="flex justify-between gap-3 border-b border-gray-800 px-3 py-3 sm:px-4">
              <span className="uppercase text-gray-400">Duration</span>
              <span className="text-right">{workout.duration} min</span>
            </div>

            <div className="flex justify-between gap-3 border-b border-gray-800 px-3 py-3 sm:px-4">
              <span className="uppercase text-gray-400">Calories</span>
              <span className="text-right">{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex justify-between gap-3 px-3 py-3 sm:px-4">
              <span className="uppercase text-gray-400">Rating</span>
              <span className="text-right">{workout.rating}</span>
            </div>

          </div>

          {/* Instructions */}
          <h2 className="mt-5 text-xs font-bold uppercase">
            Instructions
          </h2>

          <ol className="mt-2 list-decimal space-y-1 pl-4 text-[13px] leading-relaxed text-gray-400 sm:text-[14px]">
            {workout.instructions.map((instruction: string, index: number) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap gap-3 sm:gap-4">
            <AddToPlanButton workout={workout}></AddToPlanButton>

            <SaveForLaterButton workout={workout}></SaveForLaterButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
