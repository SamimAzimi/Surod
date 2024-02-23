import React,{useState} from 'react'
import SurodLogo from '../assets/logo.png'
import Image from 'next/image'
import {db} from '../firebaseConfig'
import { collection, query, where } from "firebase/firestore";
function Header(setUpdateSong) {
  const collectionRef = collection(db,'lyrics')
  const [search,setSearch] = useState()
  const getDoc = ()=>{
    if (search)
    {
     const q = query(citiesRef, where("title", "==", search));
      if(q)
      {
        console.log(q)
        setUpdateSong(q)
      }
      else
      {
        console.log("no data")
      }
    }
  }
  
  return (
    <div class='header'>
      <input type="search" name="search" value={search} onChange={(e)=>setSearch(e.target.value)} class='searchbar' placeholder="جستجو آهنگ"/>
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
