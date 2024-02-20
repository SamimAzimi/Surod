import React from 'react'
import SurodLogo from '../assets/logo.png'
import Image from 'next/image'
function Header(setUpdateSong) {
  
  return (
    <div className='header'>
      <input type="search" name="search" className='searchbar' placeholder="جستجو آهنگ"/>
      <h1 className='titleLogo'>سرود</h1>
      <div className='logoContainer'>
        <Image src={SurodLogo} alt="Surod App" />
      </div>
    </div>
  )
}

export default Header