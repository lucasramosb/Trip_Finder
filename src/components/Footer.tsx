import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return ( 
        <div className='bg-search-background bg-cover bg-center bg-no-repeat p-5 justify-center flex flex-col mb-5 items-center'>
            <div className='flex justify-center item-center'>
                <Image src="/Vector.png" width={25} height={23} alt='FSW Trips' />
                <p className='text-primary text-sm font-semibold mt-1'>Trip Finder</p>
            </div>

            <p className='text-sm font-semibold mt-2'>Todos os direitos reservados</p>
        </div>
    );
}
 
export default Footer;