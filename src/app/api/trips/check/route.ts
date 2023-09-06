import { prisma } from "@/lib/prisma";
import { isBefore } from "date-fns";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    //RECEBE A REQUISIÇÃO
    const req = await request.json();

    //BUSCA NO BANCO UMA VIAGEM COM O ID PASSADO NA REQUISIÇÃO
    const trip = await prisma.trip.findUnique({
        where: {
            id: req.tripId,
        }
    })

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
    }


    if(isBefore(new Date(req.startDate), new Date(trip.startDate))){
        return new NextResponse(JSON.stringify({
            error: {
                code: 'INVALID_START_DATE'
            }
        }),
        {
            status: 400,
        }
        )
    }

    if(isBefore(new Date(req.endDate), new Date(trip.endDate))){
        return new NextResponse(JSON.stringify({
            error: {
                code: 'INVALID_END_DATE'
            }
        }),
        {
            status: 400,
        }
        )
    }

    //VERIFICA NO BANCO SE EXISTE UMA RESERVA COM O ID E AS DATAS PASSADAS NA REQUISIÇÃO
    const reservation = await prisma.tripReservation.findMany({
        where: {
            tripId: req.tripId,
            //VERIFICA SE EXISTE UMA RESERVA ENTRE AS DATAS
            startDate:{
                lte: new Date(req.startDate)
            },
            endDate: {
                gte: new Date(req.endDate)
            }
        }
    })

    //TRATAMENTO DE ERRO SE EXISTIR UMA VIAGEM COM A DATA SELECIONADA
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