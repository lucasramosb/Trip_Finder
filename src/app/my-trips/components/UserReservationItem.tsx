import Button from "@/components/Button";
import { Prisma, TripReservation } from "@prisma/client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";
import { toast } from "react-toastify";

interface UserReservationItemProps {
    // metodo para dizer ao prisma para incluir o trip que esta relacionado com a reserva no banco de dados
    reservation: Prisma.TripReservationGetPayload<{
        include: {trip: true}
    }>;
    fetchReservations: () => void;
}

const UserReservationItem = ({reservation, fetchReservations}: UserReservationItemProps) => {

    const router = useRouter()

    const {trip} = reservation;

    const handleDeleteReservation = async () => {
        const res = await fetch(`api/trips/reservation/${reservation.id}`, {
            method: 'DELETE'
        });

        if (!res.ok) {
            return toast.error("Erro ao cancelar a reserva!")
        }

        toast.success("Reservar cancelada com sucesso!")

        fetchReservations();
    };

    return ( 
        <div className="container mx-auto">
            

            <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg">
                <div className="flex items-center gap-3 pb-5 border-b border-grayLighter border-solid">
                    <div className="relative h-[106px] w-[124px]">
                        <Image src={trip.coverImage} alt={trip.description} layout='fill' objectFit='cover' className='rounded-lg' />
                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-xl text-primaryDarker" >{trip.name}</h2>
                        <div className="flex items-center gap-1" >
                            <ReactCountryFlag countryCode={trip.countryCode} svg />
                            <p className="text-xs text-grayPrimary underline">{trip.location}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-5 text-primaryDarker">
                <h3 className="text-sm font-semibold">Data</h3>
                <div className="flex items-center gap-1 mt-1">
                    <p className="text-sm">{format(new Date(reservation.startDate), "dd 'de' MMMM", {locale: ptBR} )}</p>
                    {"-"}
                    <p className="text-sm">{format(new Date(reservation.endDate), "dd 'de' MMMM", {locale: ptBR} )}</p>
                </div> 

                <h3 className=" mt-5 text-sm font-semibold">Hóspedes</h3>
                <p className="text-sm">{reservation.guests} Hóspedes</p>
                </div>

                <h3 className="font-semibold text-sm text-primaryDarker mt-4 pt-5 border-t border-solid border-grayLighter">Informações sobre o preço</h3>

                <div className="flex justify-between mt-1">
                    <p className="text-sm text-primaryDarker">Valor</p>
                    <p className="text-sm font-semibold">R${Number(reservation.totalPaid)}</p>
                </div>

                <Button variant="danger" className="mt-5" onClick={handleDeleteReservation }>Cancelar</Button>

            </div>
        </div>
    );
}
 
export default UserReservationItem;