import Image from 'next/image'
import React, { PropsWithChildren } from 'react'
import Logo from '@img/logo.svg'

export default function LayoutAuth({children}: PropsWithChildren) {
  return (
    <div className='min-h-screen w-full h-full flex items-center justify-center bg-gray-200'>
        <div className="flex items-center justify-center py-5 h-full w-full">

            <div className="bg-white w-1/3 rounded-md flex flex-col items-center justify-center py-10">
                <Image src={Logo} alt="Logo" className='w-40 h-full'/>

                <div className="mt-7">
                    {children}
                </div>
            </div>

        </div>
    </div>
  )
}
