import React from 'react';
import { PiCheckCircleThin } from 'react-icons/pi';

interface TripHighlightsProps {
    highlights: string[]
}

const TripHighlights = ({highlights}: TripHighlightsProps) => {
    return ( 
        <div className="flex flex-col p-5 lg:p-0 lg:mt-12">
            <h2 className="font-semibold text-primaryDarker mb-3 lg:text-xl lg:mb-1">Destaques</h2>
            <div className="flex flex-wrap gap-y-2 lg:mt-5">
                {highlights.map((highlight, index) => (
                    <div key={highlight} className="flex items-center gap-1 w-1/2 lg:gap-3">
                        <PiCheckCircleThin className="text-primary" size={20} />
                        <p className="text-xs text-primaryDarker lg:text-base">{highlight}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default TripHighlights;