import React,{useState} from 'react'
import SurodLogo from '../assets/logo.png'
import Image from 'next/image'
import {db} from '../firebaseConfig'
import { collection, query, where,getDocs } from "firebase/firestore";
function Header(setUpdateSong) {
  const collectionRef = collection(db,'lyrics')
  const [search,setSearch] = useState()
  const getDoc = async ()=>{
    if (search)
    {
      const q = query(collectionRef, where("title", "==", search));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data(), doc);
        console.log(querySnapshot)
        setUpdateSong({
          "id":doc.id,
          ...doc.data()
        })
      });
    }
  }
  
  return (
    <div class='header'>
      <input type="search" name="search" value={search} onChange={()=>setSearch(e.target.value)} class='searchbar' placeholder="جستجو آهنگ"/>
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
