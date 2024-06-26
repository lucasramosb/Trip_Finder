import { Trip } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';

interface TripItemProps {
    trip: Trip;
}

const TripItem = ({trip}: TripItemProps) => {

    

    return ( 
        <Link href={`/trips/${trip.id}`}>
            <div className="flex flex-col">
                <div className='relative h-[280px] w-[280px]'>
                    <Image src={trip.coverImage} fill className='rounded-lg shadow-md' alt={trip.name} style={{objectFit: 'cover'}} />
                </div>

                <h3 className='text-primaryDarker font-medium text-sm mt-2'>{trip.name}</h3>

                <div className="flex items-center gap-1 ">
                    <ReactCountryFlag countryCode={trip.countryCode} svg className='rounded-full' />
                    <p className='text-xs text-grayPrimary'>{trip.location}</p>
                </div>

                <p className='text-xs text-grayPrimary mt-1'>
                    <span className='text-garyPrimary font-medium'>R${trip.pricePerDay.toString()}</span>
                </p>
            </div>
        </Link>
    );
}
 
export default TripItem; 