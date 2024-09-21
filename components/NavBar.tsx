'use client'
import React, { useState } from 'react'
import styles from "@/components/index.module.css"
import { RiSearch2Line } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi';
export const HomeLogo = ({ w, h }: Size) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={w} height={h} viewBox="0 0 50 50">
                <path d="M 18 5 C 15.239 5 13 7.239 13 10 L 13 11 L 32.5 11 C 36.09 11 39 13.91 39 17.5 L 39 27.5 C 39 29.433 37.433 31 35.5 31 L 22.5 31 C 20.567 31 19 29.433 19 27.5 L 19 21 L 15 21 C 13.895 21 13 21.895 13 23 L 13 32 C 13 34.761 15.239 37 18 37 L 40 37 C 42.761 37 45 34.761 45 32 L 45 10 C 45 7.239 42.761 5 40 5 L 18 5 z M 10 13 C 7.239 13 5 15.239 5 18 L 5 40 C 5 42.761 7.239 45 10 45 L 32 45 C 34.761 45 37 42.761 37 40 L 37 39 L 17.5 39 C 13.91 39 11 36.09 11 32.5 L 11 22.5 C 11 20.567 12.567 19 14.5 19 L 27.5 19 C 29.433 19 31 20.567 31 22.5 L 31 29 L 35 29 C 36.105 29 37 28.105 37 27 L 37 18 C 37 15.239 34.761 13 32 13 L 10 13 z"></path>
            </svg>
        </>
    )
}

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <header className={`${styles.glassmorphisim} h-full p-2  shadow-md shadow-neutral-500 relative `}>
            <nav>
                <div id="mobile-nav">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-1'>
                            <HomeLogo w={40} h={40} /><span>WeCOMMERCE</span>
                        </div>
                        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className=" flex items-center w-full justify-between max-w-sm border rounded-md focus-within:shadow-md focus-within:shadow-neutral-400">
                        <div className="text-lg min-w-[50px] h-8 bg-lime-400 flex items-center justify-center rounded-1-md text-white">
                            <RiSearch2Line />
                        </div>
                        <input type="text" placeholder="search items here" className="w-full outline-none bg-transparent  pl-2" />
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default NavBar
