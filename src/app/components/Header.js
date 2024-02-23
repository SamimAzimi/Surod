import React,{useState} from 'react'
import SurodLogo from '../assets/logo.png'
import Image from 'next/image'
import {db} from '../firebaseConfig'
function Header(setUpdateSong) {
  
  const [search,setSearch] = useState()

  
  return (
    <div class='header'>
      <input type="search" name="search" value={search} onChange={setSearch} class='searchbar' placeholder="جستجو آهنگ"/>
      <div class='logoContainer'>
        <Image src={SurodLogo} alt="Surod App" />
      </div>
    </div>
  )
}

export default Header