import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div>
      <header className='flex justify-between items-center p-4 bg-[#2454A0] text-white'>
        <img src="logoSenai.svg" alt="" />
        <NavBar />
      </header>
    </div>
  )
}

export default Header
