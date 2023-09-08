import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, {params: {userId}}: {params: {userId: string}}) {
    const {searchParams} = new URL(request.url);
    
    if(!userId){
        return {
            status: 400,
            body: {
                message: "userId não encontrado"
            }
        }
    }

    const reserations = await prisma.tripReservation.findMany({
        where: {
            userId: userId
        },
        include: {
            trip: true
        }
    })

    return new NextResponse(JSON.stringify(reserations), {status: 200})
       
}