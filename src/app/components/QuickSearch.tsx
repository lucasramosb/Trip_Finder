import React from 'react';
import { FaRegBuilding } from 'react-icons/fa';
import { MdOutlineCottage } from 'react-icons/md';
import { GiFarmTractor } from 'react-icons/gi';
import { IoBedOutline } from 'react-icons/io5';
import Link from 'next/link';

const QuickSearch = () => {
    return ( 
        <div className="container mx-auto p-5">
            <div className="flex items-center">
                <div className="w-full h-[2px] bg-grayPrimary"></div>
                <h2 className="font-medium text-grayPrimary whitespace-nowrap p-1">Tente pesquisar por</h2>
                <div className="w-full h-[2px] bg-grayPrimary"></div>
            </div>

            <div className="flex w-full justify-between mt-4">
                <Link href={`trips/search?text=hotel`}>
                    <div className="flex flex-col items-center gap- hover:text-primary transition-all">
                        <FaRegBuilding size={35} color='#BBBFBF'/>

                        <p className='text-sm text-grayPrimary'>Hotel</p>
                    </div>
                </Link>

                <Link href={`trips/search?text=Fazenda`}>
                    <div className="flex flex-col items-center gap- hover:text-primary transition-all">
                        <GiFarmTractor size={35} color='#BBBFBF'/>
                        <p className='text-sm text-grayPrimary'>Fazenda</p>
                    </div>
                </Link>

                <Link href={`trips/search?text=Chalé`}>
                    <div className="flex flex-col items-center gap- hover:text-primary transition-all">
                        <MdOutlineCottage size={35} color='#BBBFBF'/>
                        <p className='text-sm text-grayPrimary'>Chalé</p>
                    </div>
                </Link>

                <Link href={`trips/search?text=Pousada`}>
                    <div className="flex flex-col items-center gap- hover:text-primary transition-all">
                        <IoBedOutline size={35} color='#BBBFBF'/>
                        <p className='text-sm text-grayPrimary'>Pousada</p>
                    </div>
                </Link>
            </div>

        </div>
    );
}
 
export default QuickSearch;