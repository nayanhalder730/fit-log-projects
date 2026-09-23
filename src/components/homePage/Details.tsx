import { IWorkout } from '@/type/gymType';
import React from 'react';
interface DetailsProps {
 workout: IWorkout;
}

const Details = ({ workout }: DetailsProps) => {
    return (
        <div>
            <h2>{workout.name}</h2>
        </div>
    );
};

export default Details;