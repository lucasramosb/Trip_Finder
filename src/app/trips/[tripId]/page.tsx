import { prisma } from "@/lib/prisma";
import Image from "next/image";

import React from "react";
import ReactCountryFlag from "react-country-flag";
import TripHeader from "./components/TripHeader";
import TripReservation from "./components/TripReservation";
import TripDescription from "./components/TripDescription";
import TripHighlights from "./components/TripHighlights";
import TripLocation from "./components/TripLocation";

const getTripDetails = async (tripId: string) => {
    console.log(tripId);
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });

  return trip;
};

const TripDetails = async ({ params }: { params: { tripId: string } }) => {

  const trip = await getTripDetails(params.tripId);

  if (!trip) return null;

  return (
    <div className="container mx-auto">
        <TripHeader trip={trip}/>

        <TripReservation tripStartDate={trip.startDate} tripEndDate={trip.endDate} maxGuests={trip.maxGuests} pricePerDay={trip.pricePerDay as any} />

        <TripDescription description={trip.description} />

        <TripHighlights highlights={trip.highlights} />

        <TripLocation location={trip.location} locationDescription={trip.locationDescription} />
    </div>
  );
};

export default TripDetails;