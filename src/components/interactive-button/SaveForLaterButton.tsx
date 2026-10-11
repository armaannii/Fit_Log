'use client'
import { WorkoutContext } from '@/contexts/WorkoutContext';
import { IWorkout } from '@/types/workout.type';
import { Bookmark } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


interface Workout{
  workout: IWorkout;
}

const SaveForLaterButton = ({workout}: Workout) => {

      const { saves, setSaves, plans } = useContext(WorkoutContext);
      const isAlreadyAdded = saves.some((save: IWorkout) => save.id === workout.id)

      const handleSavedButton = () => {
          const alreadyInPlanList = plans.some((plan: IWorkout) => plan.id === workout.id)
        
          if(alreadyInPlanList){
              toast.error(`"${workout.name}" is already in your wishlist list.`);
              return;
          }
                
          setSaves([...saves, workout]);
          toast.success(`You have read "${workout.name}".`)
      };

    return (
        <button
      onClick={() => handleSavedButton()}
      disabled={isAlreadyAdded}
      className={`flex items-center gap-2 rounded-lg px-3 sm:px-4 py-2 sm:py-2 text-xs sm:text-sm font-bold  transition  outline-none ${
        isAlreadyAdded 
        ? "bg-gray-700 text-gray-400 border border-gray-600 cursor-not-allowed opacity-60"
        : "bg-lime-400 text-black hover:bg-lime-300 cursor-pointer"
      }`}
    >
      <span>
        <Bookmark size={16} strokeWidth={1.5} />
      </span>
      Save for later
    </button>
    );
};

export default SaveForLaterButton;