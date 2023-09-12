import Button from '@/components/Button';
import React from 'react';

interface TripLocationProps {
    location: string,
    locationDescription: string
}

const TripLocation = ({location, locationDescription}: TripLocationProps) => {
    return ( 
        <div className="p-5 mb-5 lg:p-0 lg:mt-10 ">
            <h2 className="font-semibold text-primaryDarker lg:text-xl">Localização</h2>
            {/* Mapa */}
            <h3 className='text-primaryDarker text-sm font-semibold lg:text-base lg:mt-2'>{location}</h3>
            <p className='text-xs text-primaryDarker mt-3 lg:text-sm lg:mt-4'>{locationDescription}</p>
            <Button className="mt-5 w-full lg:mb-15">Ver no Google Maps</Button>
        </div>
    );
}
 
export default TripLocation;