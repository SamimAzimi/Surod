import React from 'react'
import SurodLogo from '../assets/logo.png'
function header(setUpdateSong) {
  
  return (
    <div className='header'>
      <input type="search" name="search" className='searchbar' placeholder="جستجو آهنگ"/>
      <h1 className='titleLogo'>سرود</h1>
      <div className='logoContainer'>
        <img src={SurodLogo} alt="Surod App" />
      </div>
    </div>
  )
}

export default header