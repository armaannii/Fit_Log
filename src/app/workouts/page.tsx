
import React from "react";
import WorkoutCard from "@/components/WorkoutCard";
import { IWorkout } from "@/types/workout.type";

import { Oswald } from "next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
});

const getData = async () => {
  try {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    // console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Data is not available", error);
  }
};

const WorkoutsPage = async () => {
  const datas: IWorkout[] = await getData();
  console.log(datas);

  return (
    <div className="container mx-auto my-10 px-4 sm:my-14 sm:px-6 lg:my-20 lg:px-8">
      <h2 className={`text-2xl font-bold sm:text-[30px] ${oswald.className}`}>
        THE LIBRARY
      </h2>

      <p className="mb-6 text-[14px] text-[#9CA3AF] sm:mb-8">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {datas.length > 0 ? (
          datas.map((data: IWorkout, index: number) => {
            return <WorkoutCard key={index} workout={data}></WorkoutCard>;
          })
        ) : (
          <span>Data is not available</span>
        )}
      </div>
    </div>
  );
};

export default WorkoutsPage;
