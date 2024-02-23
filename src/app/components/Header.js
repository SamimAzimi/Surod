import React,{useState} from 'react'
import SurodLogo from '../assets/logo.png'
import Image from 'next/image'
import {db} from '../firebaseConfig'
import {getDoc, collection} from'firebase/firestore'
function Header(setUpdateSong) {
  const collectionRef = collection(db,'lyrics')
  const [search,setSearch] = useState()
  const getDoc = ()=>{
    if (search)
    {
      getDoc(collectionRef).then((data)=>{console.log(data)})
    }
  }
  
  return (
    <div class='header'>
      <input type="search" name="search" value={search} onChange={setSearch} class='searchbar' placeholder="جستجو آهنگ"/>
      <button type="submit" class="searchBtn" onClick={getDoc}>جستجو</button>
      <div class='logoContainer'>
        <Image src={SurodLogo} alt="Surod App" />
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Header
