"use client"

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { differenceInDays } from "date-fns";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
    tripId: string,
    tripStartDate: Date,
    tripEndDate: Date,
    maxGuests: number,
    pricePerDay: number
}

interface TripReservationForm {
    guests: number,
    startDate: Date | null,
    endDate: Date | null
}

const TripReservation = ({tripId, tripStartDate, tripEndDate, maxGuests, pricePerDay} : TripReservationProps) => {

    const {register, handleSubmit, formState: {errors}, control, watch, setError} = useForm<TripReservationForm>();

    const onSubmit = async (data: TripReservationForm) => {
        const response = await fetch('http://localhost:3000/api/trips/check',{
            method: 'POST',
            body: Buffer.from(JSON.stringify({
                startDate: data.startDate,
                endDate: data.endDate,
                tripId,
            })),
        });

        const res = await response.json();
        console.log({ res });

        //VALIDAR SE A DATA JA ESTA RESERVADA
        if(res?.error?.code === 'TRIP_ALREADY_RESERVED'){
            setError("startDate", {message: "Esta data ja esta reservada", type: "manual"});
            return setError("endDate", {message: "Esta data ja esta reservada", type: "manual"});
        }

        //VALIDAR SE A RESERVA ESTA SENDO FEITA DENTRO DE UMA DATA DISPONIVEL
        if(res?.error?.code === 'INVALID_START_DATE'){
            return setError("startDate", {message: "Esta data não esta disponivel", type: "manual"});
        }
        if(res?.error?.code === 'INVALID_END_DATE'){
            return setError("endDate", {message: "Esta data não esta disponivel", type: "manual"});
        }

        router.push(`/trips/${tripId}/confirmation?startDate=${data.startDate?.toISOString}&endDate=${data.endDate?.toISOString}&guests=${data.guests}`)
    }

    const startDate = watch("startDate");
    const endDate = watch("endDate");

    const router = useRouter()

    return ( 
        <div className="flex flex-col px-5">
            <div className="flex gap-4">
                <Controller
                    name="startDate"
                    rules={{
                        required: {value: true, message: "Data de inicio é obrigatório"},
                    }}
                    control={control}
                    
                    render={({ field }) =>
                    <DatePicker 
                    error={!!errors?.startDate} 
                    errorMessage={errors.startDate?.message} 
                    onChange={field.onChange} 
                    selected={field.value} 
                    placeholderText="Data de inicio" 
                    className="w-full"
                    minDate={tripStartDate}
                     /> }
                />
                
                <Controller
                    name="endDate"
                    rules={{
                        required: {value: true, message: "Data final é obrigatória"},
                    }}
                    control={control}

                    render={({ field }) => 
                    <DatePicker 
                    error={!!errors?.endDate} 
                    errorMessage={errors.endDate?.message} 
                    onChange={field.onChange} 
                    selected={field.value} 
                    placeholderText="Data Final" 
                    className="w-full"
                    maxDate={tripEndDate}
                    minDate={startDate ?? tripStartDate}
                    /> }
                />
            </div>

            <Input 
            {...register("guests", {required: {value: true, message: "Número de hóspedes é obrigatório"}, 
                max: {value: maxGuests, message: `Número de hospedes não pode ser maior que ${maxGuests}`}})}
            errorMessage={errors?.guests?.message}
            error={!!errors?.guests}
            placeholder={`Número de hóspedes (max: ${maxGuests})`} 
            className="mt-4"
            type="number"
            />

            <div className="flex justify-between mt-7">
                <p className="font-medium text-sm text-primaryDarker">Total:</p>
                <p className="font-medium text-sm text-primaryDarker">{
                    (startDate && endDate) ? `R$ ${differenceInDays(endDate, startDate) * pricePerDay}`  : "R$ 0,00"
                }</p>
            </div>

            <div className="pb-10 border-b border-b-grayLighter w-full">
                <Button onClick={() => handleSubmit(onSubmit)()} className="mt-5 w-full">Reservar</Button>
            </div>

        </div>
     );
}
 
export default TripReservation;