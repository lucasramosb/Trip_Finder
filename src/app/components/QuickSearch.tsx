import React from 'react';
import { FaRegBuilding } from 'react-icons/fa';
import { MdOutlineCottage } from 'react-icons/md';
import { GiFarmTractor } from 'react-icons/gi';
import { IoBedOutline } from 'react-icons/io5';

const QuickSearch = () => {
    return ( 
        <div className="container mx-auto p-5">
            <div className="flex items-center">
                <div className="w-full h-[2px] bg-grayPrimary"></div>
                <h2 className="font-medium text-grayPrimary whitespace-nowrap p-1">Tente pesquisar por</h2>
                <div className="w-full h-[2px] bg-grayPrimary"></div>
            </div>

            <div className="flex w-full justify-between mt-4">
                <div className="flex flex-col items-center gap-1">
                    <FaRegBuilding size={35} color='#BBBFBF'/>

                    <p className='text-sm text-grayPrimary'>Hotel</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <GiFarmTractor size={35} color='#BBBFBF'/>

                    <p className='text-sm text-grayPrimary'>Fazenda</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <MdOutlineCottage size={35} color='#BBBFBF'/>

                    <p className='text-sm text-grayPrimary'>Chalé</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <IoBedOutline size={35} color='#BBBFBF'/>
                    
                    <p className='text-sm text-grayPrimary'>Pousada</p>
                </div>
            </div>

        </div>
    );
}
 
export default QuickSearch;