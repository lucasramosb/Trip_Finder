import Button from '@/components/Button';
import React from 'react';

interface TripLocationProps {
    location: string,
    locationDescription: string
}

const TripLocation = ({location, locationDescription}: TripLocationProps) => {
    return ( 
        <div className="p-5 mb-5">
            <h2 className="font-semibold text-primaryDarker">Localização</h2>
            {/* Mapa */}
            <h3 className='text-primaryDarker text-sm font-semibold'>{location}</h3>
            <p className='text-xs text-primaryDarker mt-3'>{locationDescription}</p>
            <Button className="mt-5 w-full">Ver no Google Maps</Button>
        </div>
    );
}
 
export default TripLocation;