 import React, { useState } from 'react'
import { Linkdata } from '../assets/data/datadummy'
import  LogoImg  from '../assets/images/LogoImg.png'
import { BiShoppingBag } from 'react-icons/bi'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
 
 export const Header = () => {
    const [open, setopen] = useState(false)
   return (
     <div>
        <header>
            <div className='container flex-b'>
                <div className='logo'>
                    <img src={LogoImg} alt='' />
                </div>
                <nav className={open ? "mobile-view": "desktop-view"}>
                    <ul className='flex-b-g'>
                        {Linkdata.map((link) => (
                            <li key={link.id} onClick={() => setopen(null)}>
                                <NavLink to={link.url}>{link.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='account flex-b-g'>
                    <button>
                        <BiShoppingBag />
                    </button>
                    <button>Login</button>
                    <button className='open-menu' onClick={() => setopen(!open)}>
                        <HiOutlineMenuAlt1 />
                    </button>
                </div>
            </div>
        </header>
     </div>
   )
 }
 