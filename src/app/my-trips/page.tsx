'use client'

import { Prisma } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import UserReservationItem from './components/UserReservationItem';



const MyTrips = async () => { 
    
    const [reservations, setReservations] = useState<Prisma.TripReservationGetPayload<{include: { trip: true };}>[]>([]);

    const {status, data} = useSession()

    const router = useRouter()   
    
    const fetchReservations = async () => {
        const response = await fetch(`http://localhost:3000/api/user/${(data?.user as any)?.id}/reservations/`);
        console.log({response})
        const res = await response.json()
        console.log({response})
        setReservations(res)
    }

    useEffect(() => {
        if(status === "unauthenticated" || !data?.user){
            router.push('/')
        }
        
        fetchReservations();
    }, [status])
    
    return ( 
        <div className='container mx-auto p-5'>
            <h1 className='font-semibold text-primaryDarker'>Minhas Viagens</h1>
            {reservations.map(reservation => <UserReservationItem key={reservation.id} reservation={reservation}/>)}
        </div>
    );
}
 
export default MyTrips;