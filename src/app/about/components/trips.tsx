import { prisma } from "@/lib/prisma";
import React from "react";

const getTrips = async () => {
    const trips = await prisma.trip.findMany( {} )

    return trips;
}

const Trips = async () => {

    const data = await getTrips()

    const data1 = await fetch("http://jsonplaceholder.typicode.com/posts",{
        //para não usar os dados guardados em cache
        next: {
            revalidate: 0
        }
    } ).then((res) => res.json());

    console.log({data})

    return ( 
        
        <div>
            {data1.map((i: any) => (
                <p>{i.title}</p>
            ))}
        </div>
    );
}
 
export default Trips;