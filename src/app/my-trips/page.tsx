'use client'

import { Prisma } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import UserReservationItem from './components/UserReservationItem';
import Button from '@/components/Button';
import Link from 'next/link';



const MyTrips = async () => { 
    
    const [reservations, setReservations] = useState<Prisma.TripReservationGetPayload<{include: { trip: true };}>[]>([]);

    const {status, data} = useSession()

    const router = useRouter()   
    
    const fetchReservations = async () => {
        const response = await fetch(`/api/user/${(data?.user as any)?.id}/reservations/`);
        const res = await response.json()
        setReservations(res)
    }

    useEffect(() => {
        if(status === "unauthenticated"){
            router.push('/')
        }
        
        fetchReservations();
    }, [status])
    
    return ( 
        <div className='container mx-auto p-5'>
            <h1 className='font-semibold text-primaryDarker text-xl'>Minhas Viagens</h1>
           {reservations.length > 0 ? (
                <div className=' flex flex-col lg:grid lg:grid-cols-4 lg:gap-5'>
                    {reservations.map((reservation) => <UserReservationItem key={reservation.id} fetchReservations={fetchReservations} reservation={reservation}/>)}
                </div>
            )
            : 
                <div className='flex flex-col'>
                    <p className='text-primaryDarker text-xl mt-2'>Você ainda não possui reservas</p>

                    <Link href='/'>
                        <Button className='w-full mt-2'>Fazer uma reserva</Button>
                    </Link>
                </div>
        }
        </div>
    );
}
 
export default MyTrips;