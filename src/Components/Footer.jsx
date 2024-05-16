import React from 'react'
import LogoImg from '../Components/assets/images/LogoImg.jpg'
import {BsApple} from 'react-icons/bs'
import {AiOutlineGoogle} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'


export const Footer = () => {
  return (
    <>
        <footer>
            <div className='container flex-b'>
                <div className='left'>
                    <img src={LogoImg} alt=''  />
                </div>
                <h5>Downland app for FREE</h5>
                <br />
                <div className='app flex'>
                    <div className='box flex'>
                        <div>
                            <BsApple />
                        </div>
                        <div className='tetx flex'>
                            <span></span>
                            <label htmlFor=''>Download On  The App Store </label>
                        </div>
                    </div>
                    <div className='box flex'>
                        <div>
                            <AiOutlineGoogle />
                        </div>
                    </div>
                </div>
                <br />
                <label htmlFor='' >*Currently Avialable In The U.S And Canada</label>
                <div className='right'>
                    <h3>We Would Like TO BE In Touch</h3>
                    <br />
                    <br />
                    <ul className='grid-4'>
                        <li>
                            <h4>Discover</h4>
                            <NavLink to='#'>Contact</NavLink>
                            <NavLink to='#'>Contact</NavLink>
                            <NavLink to='#'>Contact</NavLink>
                            <NavLink to='#'>Contact</NavLink>
                        </li>
                        <li>
                            <h4>Discover</h4>
                            <NavLink to='#'>Contact</NavLink>
                            <NavLink to='#'>Contact</NavLink>
                            <NavLink to='#'>Contact</NavLink>
                            <NavLink to='#'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
  )
}
