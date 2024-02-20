'use client'
import React, {useState} from 'react';
import Header from './components/header'
import Add from './components/add'
import Song from './components/Song'
import {ToastContainer} from 'react-toastify'
export default function Home() {
    const [updateSong,setUpdateSong] = useState({
        "id":"",
        "title": "",
        "lyric":""
    })

  return (
    <>
      <main class="parent">
            <div class="div1">
                <Header setUpdateSong={setUpdateSong}/>
            </div>
            <div class="div2"> 
                {updateSong?<Add />:<Song updateSong={updateSong} setUpdateSong={setUpdateSong}/>}
            </div>
        </main>
            <ToastContainer/>
        </>
  );
}