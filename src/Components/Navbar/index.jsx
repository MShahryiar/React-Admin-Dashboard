import React, { useState } from 'react'
import { BellIcon, QrCodeIcon} from '@heroicons/react/24/outline'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex text-white justify-between     p-10 w-screen fixed'>
        <h1 className='font-bold text-2xl'>Admin Dashboard</h1>
        <ul className=' gap-3 hidden sm:flex items-center'>
            <QrCodeIcon className="h-8 w-8 text-white "/>
            <BellIcon className="h-8 w-8 text-white "/>
            <div className='h-10 w-10 rounded-full bg-black '></div>
        </ul>
        <button className='block sm:hidden' onClick={()=>setIsOpen(!isOpen)}>Open</button>
        {isOpen && (

            <div className='absolute h-full top-0 left-0 w-full bg-black fixed'>
                <button className='text-right w-full p-10 font-bold text-2xl' onClick={()=>setIsOpen(!isOpen)}>X</button>
            </div>
        )}
    </div>
  )
}

export default Navbar