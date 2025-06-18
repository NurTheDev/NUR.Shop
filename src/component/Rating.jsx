import React from 'react';
import {TiStar} from "react-icons/ti";

const Rating = ({value}) => {
    return (
        <div>
            <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                    <TiStar
                        key={index}
                        className={`text-lg ${index < value ? 'text-yellow-500' : 'text-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Rating;
