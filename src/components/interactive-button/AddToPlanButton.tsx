"use client";
import { WorkoutContext } from "@/contexts/WorkoutContext";
import { IWorkout } from "@/types/workout.type";
import { CalendarPlus2 } from "lucide-react";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

interface Workout{
  workout: IWorkout;
}


const AddToPlanButton = ({workout}: Workout) => {

  const { plans, setPlans, saves } = useContext(WorkoutContext);
  const isAlreadyAdded = plans.some((plan: IWorkout) => plan.id === workout.id);
  const planListFull = plans.length >= 5;

  const handleAddToPlanButton = () => {
      const alreadyInSavedList = saves.some((save: IWorkout) => save.id === workout.id)

      if(alreadyInSavedList){
          toast.error(`"${workout.name}" is already in your wishlist list.`);
          return;
      }
      if(planListFull){
        toast.error(`Plan already contains 5 lifts`);
        return;
       }
        
      setPlans([...plans, workout]);
      toast.success(`${workout.name} is added to plan.`)
  };
  // console.log(plans, "add to plans");
  return (
    <button
      onClick={() => handleAddToPlanButton()}
      disabled={isAlreadyAdded}
      className={`flex items-center gap-2 rounded-lg px-3 sm:px-4 py-2 sm:py-2 text-xs sm:text-sm font-bold transition  outline-none ${
        isAlreadyAdded
          ? "bg-gray-700 text-gray-400 border border-gray-600 cursor-not-allowed opacity-60"
          : "bg-lime-400 text-black hover:bg-lime-300 cursor-pointer"
      }`}
    >
      <span>
        <CalendarPlus2 size={16} strokeWidth={1.5} />
      </span>
      Add to todays plan
    </button>
  );
};

export default AddToPlanButton;
