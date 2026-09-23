import { IWorkout } from '@/type/gymType';
import React from 'react';
interface WorkoutCardProps {
    workout:IWorkout
    }

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    const{id, name, description}=workout
    return (
        <div>
            {id} {name} {description}

        </div>
    );
};

export default WorkoutCard;