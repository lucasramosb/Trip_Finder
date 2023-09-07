import { prisma } from '@/lib/prisma';
import { NextResponse } from "next/server";

export async function POST(request: Request){
    const req = await request.json();

    const {startDate, endDate, userId, tripId, totalPaid, guests} = req;
    console.log(req) 

    //BUSCA NO BANCO UMA VIAGEM COM O ID PASSADO NA REQUISIÇÃO
    const trip = await prisma.trip.findUnique({
        where: {
            id: req.tripId,
        }
    });

    //TRATAMENTO DE ERRO SE NÃO EXISTIR UMA REQUISIÇÃO
    if(!trip){
        return new NextResponse(JSON.stringify({
            error: {
                code: 'TRIP_NOT_FOUND'
            }
        }),
        {
            status: 404,
        }
        )
    };

    await prisma.tripReservation.create({
        data: {
            startDate:new Date(startDate),
            endDate: new Date(endDate),
            tripId,
            totalPaid,
            guests,
            userId
        },
    });

    return new NextResponse(
        JSON.stringify({
            success: true
        }), 
        {status: 201}
    )
}