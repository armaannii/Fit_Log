"use client"
import { IWorkout } from "@/types/workout.type";
import { createContext, ReactNode, useContext, useState } from "react";


interface WorkoutContextType {
  plans: IWorkout[];
  setPlans : React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saves: IWorkout[];
  setSaves: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}


export const WorkoutContext = createContext<WorkoutContextType>({
    plans: [],
    setPlans: () => {},
    saves: [],
    setSaves: () => {},
});

// export const WorkoutContext = createContext<WorkoutContextType | null>(null);


export const WorkoutProvider = ({children}: {children: ReactNode}) =>{
    
    const [plans, setPlans] = useState<IWorkout[]>([]);
    const [saves, setSaves] = useState<IWorkout[]>([]);

    // const globalData = {
    //     plans,
    //     setPlans,
    //     saves,
    //     setSaves,
    // }

    return (
        <WorkoutContext.Provider value={{ plans, setPlans, saves, setSaves }}>
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