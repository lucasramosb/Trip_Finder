import React from 'react';
import TripItem from '@/components/TripItem';
import { Trip } from '@prisma/client';
import { prisma } from '@/lib/prisma';

    //pegando trips diretamente do banco de dados
    async function getTrips() {
        const trips = await prisma.trip.findMany({})
        return trips;
    }

const RecommendedTrips = async () => {

    const data = await getTrips();

    return ( 
        <div className="container mx-auto p-5">
            <div className="flex items-center">
                <div className="w-full h-[2px] bg-grayPrimary"></div>
                <h2 className="font-medium text-grayPrimary whitespace-nowrap p-1">Destinos recomendadas</h2>
                <div className="w-full h-[2px] bg-grayPrimary"></div>
            </div>

            <div className="flex flex-col items-center mt-5 gap-5">
                {data.map((trip: Trip) => (
                    <TripItem key={trip.id} trip={trip} />
                ))}
            </div>
        </div>    
    );
}
 
export default RecommendedTrips;