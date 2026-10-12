import React from "react";
import WorkoutCard from "./WorkoutCard";
import { IWorkout } from "@/types/workout.type";

import { Oswald } from "next/font/google";
const oswald = Oswald({
    subsets: ["latin"],
});

const getData = async () => {
  try {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Data is not available", error);
    return []; 
  }
};

const Workouts = async () => {
  const datas: IWorkout[] = await getData();

  return (
    <div id="workout-library" className="container mx-auto px-4 sm:px-6 my-12 lg:my-20">
      <h2 className={`font-bold text-[30px] ${oswald.className}`}>THE LIBRARY</h2>
      <p className="text-[#9CA3AF] text-[14px] mb-8">Twelve lifts covering every major muscle group.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datas && datas.length > 0 ? (
          datas.map((data: IWorkout, index: number) => {
            return <WorkoutCard key={index} workout={data}></WorkoutCard>
          })
        ) : (
          <span className="text-gray-400 text-sm">Data is not available</span>
        )}
      </div>
    </div>
  );
};

export default Workouts; // (Keep your standard export default Workouts below)