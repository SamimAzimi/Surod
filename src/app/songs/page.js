"use client"

import React, {useEffect, useState} from 'react'
import {db} from '../firebaseConfig'
import { collection, getDocs} from 'firebase/firestore'
import {toast} from 'react-toastify'
function page() {
    const collectionref = collection(db, "lyrics")
    const [songs,setSongs] = useState([])

    const doSomething = async() =>{
      const querySnapshot = await getDocs(collectionref);
      // console.log(querySnapshot.doc)
      const data = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        data.push(doc.data())
      });
      setSongs(data)
      console.log(songs)
    }

    useEffect(()=>{
      doSomething();
    },[])

  return (
    <>
    <div class="allSongContainer">
        <h3><a href="/">صفحه اصلی</a></h3>
        <ul>
          {songs && songs.map(song=>{
            return (

              <li><h1>{song.title}</h1></li>
            )
          })}
        </ul>
    </div>
    </>
  )
}

export default page
