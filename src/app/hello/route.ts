import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import React from "react";

//rota de api
export async function GET() {

    const trips = await prisma.trip.findMany();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return new NextResponse(JSON.stringify(trips), { status: 200 });
}