"use client";

import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import CurrencyInput from "react-currency-input-field";

const TripSearch = () => {
    return ( 
        <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat">
            <h1 className="font-semibold text-2xl text-primaryDarker text-center">Encontre sua próxima <span className="text-primary" >Viagem!</span></h1>

            <div className="flex flex-col mt-5 gap-4">
                <Input placeholder="Onde você quer ir ?"/>

                <div className="flex gap-3 ">
                    <DatePicker placeholderText="Data de ida" onChange={() => {}} className="w-full" />
                    <CurrencyInput intlConfig={{ locale: "pt-BR", currency: "BRL" }} placeholder="Orçamento" className="rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-primaryDarker placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-primary w-full"/>
                </div>

                <button className="bg-primary text-white rounded-lg p-2 text-sm font-medium shadow transition-all hover:bg-primaryDarker">Buscar</button>
            </div>
        </div>
     );
}
 
export default TripSearch;