import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    const req = await request.json();

    const reservation = await prisma.tripReservation.findMany({
        where: {
            tripId: req.tripId,
            //Verifica se existe reserva entre as datas
            startDate:{
                lte: new Date(req.startDate)
            },
            endDate: {
                gte: new Date(req.endDate)
            }
        }
    })

    if(reservation.length > 0){
        return new NextResponse(JSON.stringify({
            error: {
                code: 'TRIP_ALREADY_RESERVED'
            }
        }))
    }
    
    return new NextResponse(JSON.stringify({
        success: true
    }))
}