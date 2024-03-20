import React from 'react'
import './Header.css'
import { FaHome, FaUserTie } from "react-icons/fa";
import logoNasa from '../../assets/NASA-ai.svg'

export const Header = () => {
  return (
    <div className='container_header'>
        <FaHome className='icons_home'/>
        <img src={logoNasa} />
        <FaUserTie className='icons_user' />
    </div>
  )
}

