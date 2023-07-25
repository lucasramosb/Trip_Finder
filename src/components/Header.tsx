"use client"

import React from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import {AiOutlineMenu} from 'react-icons/ai'


const Header = () => {

    const {status, data} = useSession()

    const handleLoginClick = () => signIn()

    const [menuIsOpen, setMenuIsOpen] = React.useState(false)

    const handleLogoutClick = () => {
        signOut()
        setMenuIsOpen(false)
    }

    const handleMenuClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return ( 
        <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
            <div className='relative h-[32px] w-[182px]'>
                <Image src="/logo.png" alt="FSW Trips" fill />
            </div>

            { status === "unauthenticated" && (
                <button className='text-primary text-sm font-semibold' onClick={handleLoginClick}>
                Login
                </button>
            )}

            {status === "authenticated" && data.user && (
                <div className="flex items-center gap-3 border-grayLighter border border-solid rounded-full p-2 px-3 relative">
                    <AiOutlineMenu size={16} className='cursor-pointer' onClick={handleMenuClick} />

                    <Image height={35} width={35} src={data.user.image!} alt={data.user.image!} className='rounded-full'/>

                    {menuIsOpen && (
                        <div className="z-50 absolute top-14 left-0 w-full h-[100px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
                            <button className='text-primary text-sm font-semibold '  onClick={handleLogoutClick}>
                                Logout 
                            </button>
                        </div>
                    )}
                </div>
            )}

        </div>
    );
}
 
export default Header;