
import { IWorkout } from '@/types/workout.type';
import Image from 'next/image';
import React from 'react';
import { Clock, Flame, Star, X } from 'lucide-react';
import Link from 'next/link';

interface AddedCardListProps {
    workout: IWorkout;
    onDelete: (id: number) => void;
}

const SaveForLater = ({workout, onDelete}: AddedCardListProps) => {
    return (
        <div className="flex w-full flex-col gap-4 rounded-2xl border-2 border-[#232732] bg-base-100 p-3 text-white sm:p-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Left Section: Image and Details */}
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                {/* Workout Image */}
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={500}
                    height={300}
                    className="h-16 w-20 shrink-0 rounded-xl object-cover sm:h-20 sm:w-28"
                />

                {/* Workout Details */}
                <div className="flex min-w-0 flex-col gap-1">
                    <h3 className="text-base font-extrabold uppercase tracking-wide text-white sm:text-lg">
                        {workout.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-400">
                        {workout.equipment}
                    </p>

                    {/* Stats Row */}
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold text-gray-300 sm:gap-4">

                        {/* Duration */}
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 shrink-0 text-lime-400" />
                            <span>{workout.duration} min</span>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center gap-1">
                            <Flame className="h-4 w-4 shrink-0 fill-lime-400 text-lime-400" />
                            <span>{workout.caloriesBurned} kcal</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 shrink-0 fill-lime-400 text-lime-400" />
                            <span>{workout.rating}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section: Action Buttons */}
            <div className="flex justify-between items-center gap-3 lg:shrink-0 ">

                {/* View Details Button */}
                <Link href={`/workouts/${workout.id}`}>
                    <button
                        className="cursor-pointer rounded-full border border-[#2f2f3f] px-3 py-2 text-xs font-medium text-gray-200 transition-colors hover:bg-[#1f1f2c] sm:px-5 sm:py-2.5 sm:text-sm"
                    >
                        View Details
                    </button>
                </Link>

                {/* Delete / Remove Button */}
                <button
                    onClick={() => onDelete(workout.id)}
                    className="ml-2 cursor-pointer p-1.5 text-gray-400 outline-none transition-colors hover:text-white"
                    aria-label="Remove item"
                >
                    <X className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default SaveForLater;