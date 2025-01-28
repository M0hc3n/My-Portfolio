import Link from 'next/link';
import React from 'react'
import { HiOutlineHome } from "react-icons/hi";
import { IoMdArrowRoundBack } from "react-icons/io";


const Navbar = () => {
  return (
    <Link href={'/'} className='w-[300px] lg:w-[800px] flex items-end gap-[8px] pt-[40px]'>
        <IoMdArrowRoundBack size={30} color='white' />
        
        <p className='text-[1.3rem] lg:text-[1.5rem] text-white font-sans font-bold'>Home</p>
    </Link>
  )
}

export default Navbar