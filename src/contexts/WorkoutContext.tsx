"use client"
import { IWorkout } from "@/types/workout.type";
import { createContext, ReactNode, useContext, useState } from "react";


interface WorkoutContextType {
  plans: IWorkout[];
  setPlans : React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saves: IWorkout[];
  setSaves: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  completedWorkouts: string[];
  setCompletedWorkouts: React.Dispatch<React.SetStateAction<string[]>>;
}


export const WorkoutContext = createContext<WorkoutContextType>({
    plans: [],
    setPlans: () => {},
    saves: [],
    setSaves: () => {},
    completedWorkouts: [],
    setCompletedWorkouts: () => {},
});

// export const WorkoutContext = createContext<WorkoutContextType | null>(null);


export const WorkoutProvider = ({children}: {children: ReactNode}) =>{
    
    const [plans, setPlans] = useState<IWorkout[]>([]);
    const [saves, setSaves] = useState<IWorkout[]>([]);

    const [completedWorkouts, setCompletedWorkouts] = useState<string[]>([]);

    // const globalData = {
    //     plans,
    //     setPlans,
    //     saves,
    //     setSaves,
    // }


    return (
        <WorkoutContext.Provider value={{ plans, setPlans, saves, setSaves, completedWorkouts,  setCompletedWorkouts}}>
            {children}
        </WorkoutContext.Provider>
    );
};


export const useWorkout = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("useWorkout must be used inside WorkoutProvider");
  }

  return context;
};