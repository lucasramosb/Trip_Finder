import React from 'react';
import { PiCheckCircleThin } from 'react-icons/pi';

interface TripHighlightsProps {
    highlights: string[]
}

const TripHighlights = ({highlights}: TripHighlightsProps) => {
    return ( 
        <div className="flex flex-col p-5">
            <h2 className="font-semibold text-primaryDarker mb-3">Destaques</h2>
            <div className="flex flex-wrap gap-y-2">
                {highlights.map((highlight, index) => (
                    <div key={highlight} className="flex items-center gap-1 w-1/2">
                        <PiCheckCircleThin className="text-primary" size={20} />
                        <p className="text-xs text-primaryDarker ">{highlight}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default TripHighlights;