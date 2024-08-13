import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='h-16 shadow-md bg-white' >
            <div className=" container h-full mx-auto flex items-center px-4 justify-between">
                <div ><Link to={"/"}><Logo w={90} h={50} /></Link></div>
                <div className=' hidden lg:flex items-center justify-between w-full max-w-sm border rounded-full focus-within:shadow-md pl-2'>
                    <input type='text' placeholder='search product here ...' className='w-full outline-nones' />
                    <div className="text-lg bg-red-500 flex min-w-[50px] h-8 items-center text-white rounded-r-full justify-center">
                        <GrSearch />
                    </div>
                </div>
                <div className='flex items-center gap-7'>
                    <div className='text-3xl'>
                        <FaRegCircleUser />
                    </div>
                    <div className='text-2xl relative '>
                        <span><FaShoppingCart /></span>
                        <div className='bg-red-600 w-5 h-5 absolute -top-3 -right-2 rounded-full flex items-center justify-center p-1 text-white '>
                            <p className='text-xs'>0</p>
                        </div>
                    </div>
                    <div>
                        <Link to={"login/"} className='bg-red-500 px-3 py-1 text-white rounded-full hover:bg-red-700'>Login</Link>
                    </div>

                </div>
            </div>

        </header>
    )
}

export default Header