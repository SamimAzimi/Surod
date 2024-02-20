import React from 'react'
import SurodLogo from '../assets/logo.png'
import Image from 'next/image'
function Header(setUpdateSong) {
  
  return (
    <div class='header'>
      <input type="search" name="search" class='searchbar' placeholder="جستجو آهنگ"/>
      <div class='logoContainer'>
        <Image src={SurodLogo} alt="Surod App" />
      </div>
    </div>
  )
}

export default Header