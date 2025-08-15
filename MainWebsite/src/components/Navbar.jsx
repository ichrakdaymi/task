import React, { useState } from 'react'
import Logo from '../assets/Logo-Recolab.png'
import lock from '../assets/lock.svg'
import Hamburger from '../assets/hamburgerMenu.svg'
import Close from '../assets/close.svg'
import { motion } from 'framer-motion'
import { href, Link } from 'react-router-dom'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
    

    return (
        <div className='w-full h-[96px] bg-white shadow-sm border-b-2'>
            <div className='p-4 md:max-w-[1080px] max-w-[400px] m-auto w-full h-full flex justify-between items-center'>
                <img src={Logo} alt="logo" className='h-[120px] cursor-pointer' />
                <div className="flex items-center">
                    <ul className='hidden md:flex gap-4 '>
                        <li>
                            <a  href="#home">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#achievements">
                                Achievements
                            </a></li>
                        <li>
                            <a href="#courses">
                                Courses
                            </a></li>
                        <li>
                            <a href="#feedbacks">Feedback</a>
                        </li>

                    </ul>
                </div>
                <div className='md:flex hidden'>
                    <Link to="/coming-soon" className='flex justify-content-between items-center px-6 gap-2'>
                        <button className='flex justify-content-between items-center bg-transparent px-6 gap-2'>
                            <img src={lock} alt='lock' />
                            Login
                        </button>
                    </Link>

                    <Link to="/coming-soon">
                        <button className='px-8 py-3 bg-[#F57D1F] text-white'>Sign up for free</button>
                    </Link>

                </div>
                <motion.div whileTap={{ scale: 0.6 }} className="md:hidden cursor-pointer" onClick={handleToggle}>
                    <img src={toggle ? Close : Hamburger} alt="hamburger" />
                </motion.div>
            </div>
            <div>
                <motion.ul
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    className={toggle ? 'absolute z-10 p-4 bg-white w-full px-8 md:hidden' : 'hidden'}>
                    <li className='p-4 hover:bg-gray-50'>
                        <a href="#home">Home</a>
                    </li>
                    <li className='p-4 hover:bg-gray-50'>
                        <a href="#achievements">Achievements</a>
                    </li>
                    <li className='p-4 hover:bg-gray-50'>
                        <a href="#courses">Courses</a>
                    </li>
                    <li className='p-4 hover:bg-gray-50'>
                        <a href="#feedbacks">Feedbacks</a>
                    </li>

                    <div className='flex flex-col my-4 gap-4'>
                        <Link to="/coming-soon">
                            <button className='flex border border-[#F57D1F] justify-center items-center bg-transparent px-6 gap-2 py-4'>
                                <img src={lock} alt='lock' />
                                Login
                            </button>
                        </Link>
                        <Link to="/coming-soon">
                            <button className='px-8 py-5 text-white bg-[#F57D1F]'>Sign up for free</button>
                        </Link>

                    </div>
                </motion.ul>
            </div>
        </div>
    )
}

export default Navbar