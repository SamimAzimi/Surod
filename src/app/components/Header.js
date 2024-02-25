import React,{useState} from 'react'
import SurodLogo from '../assets/logo.png'
import Image from 'next/image'
import {db} from '../firebaseConfig'
import { collection, query, where,getDocs } from "firebase/firestore";
import {toast} from 'react-toastify'

function Header({setUpdateSong}) {
  const collectionRef = collection(db,'lyrics')
  const [search,setSearch] = useState()
  const getDoc = async ()=>{
    if (search)
    {
      const q = query(collectionRef, where("title", "==", search));
      const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {

          toast.info("آهنگ شما دریافت نگردید");
          setSearch('')
        } else {
          // docSnap.data() will be undefined in this case
          querySnapshot.forEach((doc) => {
            setUpdateSong({
              "id":doc.id,
              ...doc.data()
            })
          });
        }
        setSearch('')

    }
    else {
      toast.info("نام اهنگ جهت جستجو وجود ندارد");
    }
  }

  return (
    <div class='header'>
      <h1><a href="/songs">تمام آهنگ ها</a></h1>
      <div class="searchGrp">
      <button type="submit" class="actionBtn searchbtn" onClick={getDoc}>جستجو</button>
      <input type="search" name="search" value={search} onChange={(e)=>setSearch(e.target.value)} class='searchbar' placeholder="جستجو آهنگ"/>
      </div>
      <div class='logoContainer'>
        <Image src={SurodLogo} alt="Surod App" />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Header
