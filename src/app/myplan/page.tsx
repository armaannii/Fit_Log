
"use client";
import AddedCardList from "@/components/added-card-list/AddedCardList";
import SaveForLater from "@/components/added-card-list/SaveForLater";
import { WorkoutContext } from "@/contexts/WorkoutContext";
import { IWorkout } from "@/types/workout.type";
import Link from "next/link";
import React, { useCallback, useContext, useMemo, useState } from "react";
import { toast } from "react-toastify";

const MyPlanPage = () => {
  const emptyCard = (
    <section className="flex min-h-45 flex-col items-center justify-center rounded-xl border border-dashed border-[#282831] bg-[#0f0f14] px-4 text-center md:min-h-60 lg:min-h-80">
      <h2 className="text-xs font-bold tracking-wide">NOTHING HERE YET</h2>
      <p className="mt-2 text-[10px] text-gray-500">
        Browse the library and add a lift to get today moving.
      </p>
      <Link href={"/workouts"}>
        <button className="mt-4 cursor-pointer rounded-full bg-[#9cff00] px-5 py-2 text-[12px] font-bold text-black outline-none transition hover:bg-[#b0ff33]">
          Go to workouts
        </button>
      </Link>
    </section>
  );

  const { plans, saves, setPlans, setSaves } = useContext(WorkoutContext);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<"duration" | "rating" | "calories">("duration");

  // Delete card from Plan list
  const handleDeletePlan = (id: number) => {
    const deletedWorkout = plans.find((item: IWorkout) => item.id === id);
    setPlans(plans.filter((item: IWorkout) => item.id !== id));
    if (deletedWorkout) {
      toast.error(`"${deletedWorkout.name}" removed from today's plan.`);
    }
  };

  // Delete card from Saved list
  const handleDeleteSaved = (id: number) => {
    const deletedWorkout = saves.find((item: IWorkout) => item.id === id);
    setSaves(saves.filter((item: IWorkout) => item.id !== id));
    if (deletedWorkout) {
      toast.error(`"${deletedWorkout.name}" removed from saved list.`);
    }
  };

  //Mark as done 
  const handleMarkAsDone = (id: number) =>{
    const workoutDone = plans.find((workout: IWorkout) => workout.id === id);
    if(workoutDone){
      toast.success(`"${workoutDone.name}" is complete.`);
    }
  }

  // function to sort workout lists
  const sortList = useCallback((workouts: IWorkout[]) => {
    const list = [...workouts];
    if (sortBy === "duration") {
      list.sort((a, b) => (b.duration || 0) - (a.duration || 0));
    } else if (sortBy === "rating") {
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === "calories") {
      list.sort((a, b) => (b.caloriesBurned || 0) - (a.caloriesBurned || 0));
    }
    return list;
  }, [sortBy]);

  const sortedPlanList = useMemo(() => sortList(plans), [plans, sortList]);
  const sortedSaveList = useMemo(() => sortList(saves), [saves, sortList]);

  const activeList = activeTab === "plan" ? sortedPlanList : sortedSaveList;
  const totalExercises = activeList.length;

  const { totalMinutes, totalCalories } = useMemo(() => {
    return activeList.reduce(
      (acc, workout) => ({
        totalMinutes: acc.totalMinutes + (workout.duration || 0),
        totalCalories: acc.totalCalories + (workout.caloriesBurned || 0),
      }),
      { totalMinutes: 0, totalCalories: 0 },
    );
  }, [activeList]);

  return (
    <main className="container mx-auto min-h-screen px-4 py-5 text-white sm:px-6 sm:py-6 lg:px-7 lg:py-7">
      {/* Header */}
      <section>
        <h1 className="text-xl font-bold tracking-tight">MY PLAN</h1>
        <p className="mt-1 text-[10px] text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </section>

      {/* Dynamic Status Row */}
      <section className="mt-5 flex h-18.5 items-center rounded-lg border border-[#24242d] bg-[#13131b] px-2 sm:px-4">
        <div className="flex min-w-0 flex-1 flex-col justify-center border-r border-[#24242d] pl-2 sm:pl-0">
          <span className="text-[8px] text-gray-500">Exercises</span>
          <span className="mt-1 text-xl font-bold text-[#9cff00] sm:text-2xl">
            {totalExercises}
          </span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center border-r border-[#24242d] pl-3 sm:pl-6">
          <span className="text-[8px] text-gray-500">Minutes</span>
          <span className="mt-1 text-xl font-bold sm:text-2xl">{totalMinutes}</span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center pl-3 sm:pl-6">
          <span className="text-[8px] text-gray-500">Calories</span>
          <span className="mt-1 text-xl font-bold sm:text-2xl">{totalCalories}</span>
        </div>
      </section>

      {/* Tabs Control */}
      <div>
        <div className="mt-8 mb-4 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-fit max-w-full gap-1 rounded-xl border-2 border-[#1C1F26] bg-[#151921] p-1">
            <button
              onClick={() => setActiveTab("plan")}
              className={`rounded-md px-3 py-2 text-xs font-bold outline-none transition-colors sm:px-4 ${
                activeTab === "plan"
                  ? "bg-[#1F242D] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              My plan ({sortedPlanList.length})
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-3 py-2 text-xs font-bold outline-none transition-colors sm:px-4 ${
                activeTab === "saved"
                  ? "bg-[#1F242D] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved ({sortedSaveList.length})
            </button>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-3 ">
            <p className="text-[12px] text-[#8A92A0]">Sort By</p>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "rating" | "calories")
              }
              className="select select-ghost w-30 rounded-lg border-2 border-[#1C1F26] font-medium text-white outline-none"
            >
              <option value="calories">Calories</option>
              <option value="duration">Duration</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Tab Content Rendering */}
        <div className="space-y-4 sm:space-y-5">
          {activeTab === "plan"
            ? sortedPlanList.length > 0 
              ? sortedPlanList.map((workout: IWorkout) => (
                  <AddedCardList
                    key={workout.id}
                    workout={workout}
                    onDelete={handleDeletePlan}
                    onMarkAsDone={handleMarkAsDone}
                  />
                ))
              : emptyCard
            : sortedSaveList.length > 0
              ? sortedSaveList.map((workout: IWorkout) => (
                  <SaveForLater
                    key={workout.id}
                    workout={workout}
                    onDelete={handleDeleteSaved}
                  />
                ))
              : emptyCard}
        </div>
      </div>
    </main>
  );
};

export default MyPlanPage;
