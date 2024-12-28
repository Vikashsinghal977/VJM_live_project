import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/images/Icons/Kanya.png";
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { FaRegListAlt } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


export default function Navbar() {
    return (
        <div className='mx-auto w-full  h-24 flex max-w-7xl items-center justify-between px-4 py-5 text-sm'>
            {/* Left Section */}
            <section className='flex items-center gap-10'>
                <Image src={logo} alt='Logo' className='w-12' />
                <MobileNav />
                <div className='hidden md:flex items-center gap-4 transition-all'>
                    <Link href={'/'} className='relative group px-2 py-3 transition-all'><p className='flex items-center gap-2 cursor-pointer text-neutral-400 hover:text-black group-hover:text-black'><span>Features</span>
                        <IoIosArrowDown className='rotate-180 transition-all group-hover:rotate-0' />
                    </p>
                        {/* Dropdown */}
                        <div className='absolute right-0 top-10 hidden transition-all flex-col gap-1 rounded-lg bg-white w-auto shadow-md group-hover:flex'>
                            <Link href={'#'} className='flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>
                                <FaRegListAlt />
                                <span className='whitespace-nowrap pl-3'>Toda List</span>
                            </Link>
                            <Link href={'#'} className='flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>
                                <FaRegListAlt />
                                <span className='whitespace-nowrap pl-3'>Toda List</span>
                            </Link>
                            <Link href={'#'} className='flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>
                                <FaRegListAlt />
                                <span className='whitespace-nowrap pl-3'>Toda List</span>
                            </Link>
                            <Link href={'#'} className='flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>
                                <FaRegListAlt />
                                <span className='whitespace-nowrap pl-3'>Toda List</span>
                            </Link>
                        </div>
                    </Link>
                    <Link href={'/'} className='relative group px-2 py-3 transition-all'><p className='flex items-center gap-2 cursor-pointer text-neutral-400 hover:text-black group-hover:text-black'><span>Company</span>
                        <IoIosArrowDown className='rotate-180 transition-all group-hover:rotate-0' />
                    </p>
                        {/* Dropdown */}
                        <div className='absolute right-0 top-10 hidden transition-all flex-col gap-1 rounded-lg bg-white w-auto shadow-md group-hover:flex'>
                            <Link href={'#'} className='flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>
                                <FaRegListAlt />
                                <span className='whitespace-nowrap pl-3'>Toda List</span>
                            </Link>
                            <Link href={'#'} className='flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>
                                <FaRegListAlt />
                                <span className='whitespace-nowrap pl-3'>Toda List</span>
                            </Link>
                            <Link href={'#'} className='flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>
                                <FaRegListAlt />
                                <span className='whitespace-nowrap pl-3'>Toda List</span>
                            </Link>
                            <Link href={'#'} className='flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>
                                <FaRegListAlt />
                                <span className='whitespace-nowrap pl-3'>Toda List</span>
                            </Link>
                        </div>
                    </Link>
                    <Link href={'/'} className='relative group px-2 py-3 transition-all'><p className='flex items-center gap-2 cursor-pointer text-neutral-400 hover:text-black group-hover:text-black'><span>Careers</span>
                    </p>

                    </Link>
                    <Link href={'/'} className='relative group px-2 py-3 transition-all'><p className='flex items-center gap-2 cursor-pointer text-neutral-400 hover:text-black group-hover:text-black'><span>News</span>
                    </p>

                    </Link>
                </div>
            </section>
            {/* Right Section */}
            <section className='hidden md:flex items-center gap-8'>
                <button className='h-fit text-neutral-400 transition-all hover:text-black/90'>Login</button>
                <button className='h-fit rounded-xl px-4 py-2 border-2 text-neutral-400 transition-all hover:text-black/90 hover:border-black'>Register</button>

            </section>

            <AiOutlineMenu className='cursor-pointer md:hidden text-4xl' />
        </div>
    )
}


function MobileNav() {
    return <div className='z-50 top-0 left-0 fixed flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden'>
        <div className=' h-full bg-white px-4 py-4 w-[65%]'>
            <section className='flex justify-end'>
                <AiOutlineClose className='text-4xl cursor-pointer' />
            </section>
            <div className='flex flex-col items-center gap-4 transition-all'>
                    <Link href={'/'} className='relative group px-2 py-3 transition-all'><p className='flex items-center gap-2 cursor-pointer text-neutral-400 hover:text-black group-hover:text-black'><span>Features</span>
                        <IoIosArrowDown className='rotate-180 transition-all group-hover:rotate-0' />
                    </p>
                        {/* Dropdown */}
                        <div className='absolute right-0 top-10 hidden transition-all flex-col gap-1 rounded-lg bg-white w-auto shadow-md group-hover:flex'>
                            <Link href={'#'} className='flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>
                                <FaRegListAlt />
                                <span className='whitespace-nowrap pl-3'>Toda List</span>
                            </Link>
                            <Link href={'#'} className='flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>
                                <FaRegListAlt />
                                <span className='whitespace-nowrap pl-3'>Toda List</span>
                            </Link>
                            <Link href={'#'} className='flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>
                                <FaRegListAlt />
                                <span className='whitespace-nowrap pl-3'>Toda List</span>
                            </Link>
                            <Link href={'#'} className='flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>
                                <FaRegListAlt />
                                <span className='whitespace-nowrap pl-3'>Toda List</span>
                            </Link>
                        </div>
                    </Link>
                    <Link href={'/'} className='relative group px-2 py-3 transition-all'><p className='flex items-center gap-2 cursor-pointer text-neutral-400 hover:text-black group-hover:text-black'><span>Company</span>
                        <IoIosArrowDown className='rotate-180 transition-all group-hover:rotate-0' />
                    </p>
                        {/* Dropdown */}
                        <div className='absolute right-0 top-10 hidden transition-all flex-col gap-1 rounded-lg bg-white w-auto shadow-md group-hover:flex'>
                            <Link href={'#'} className='flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>
                                <FaRegListAlt />
                                <span className='whitespace-nowrap pl-3'>Toda List</span>
                            </Link>
                            <Link href={'#'} className='flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>
                                <FaRegListAlt />
                                <span className='whitespace-nowrap pl-3'>Toda List</span>
                            </Link>
                            <Link href={'#'} className='flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>
                                <FaRegListAlt />
                                <span className='whitespace-nowrap pl-3'>Toda List</span>
                            </Link>
                            <Link href={'#'} className='flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>
                                <FaRegListAlt />
                                <span className='whitespace-nowrap pl-3'>Toda List</span>
                            </Link>
                        </div>
                    </Link>
                    <Link href={'/'} className='relative group px-2 py-3 transition-all'><p className='flex items-center gap-2 cursor-pointer text-neutral-400 hover:text-black group-hover:text-black'><span>Careers</span>
                    </p>

                    </Link>
                    <Link href={'/'} className='relative group px-2 py-3 transition-all'><p className='flex items-center gap-2 cursor-pointer text-neutral-400 hover:text-black group-hover:text-black'><span>News</span>
                    </p>

                    </Link>
                </div>
        </div>
    </div>
}