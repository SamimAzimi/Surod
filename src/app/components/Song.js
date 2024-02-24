import React from 'react'
import {db} from '../firebaseConfig'
import { doc, deleteDoc, updateDoc} from "firebase/firestore";

import {toast} from 'react-toastify'
function Song({updateSong,setUpdateSong}) {



    const handleDelete= async (e)=>{
        e.preventDefault()
        await deleteDoc(doc(db, "lyrics", updateSong.id));
        toast.info("این آهنگ حذف گردید")
        setUpdateSong({
            "title":"",
            "id":"",
            "lyrics":""
          })
    }
    const handleChangeUpdate=(e)=>{
         const name = e.target.name
        const value = e.target.value
        setUpdateSong({...updateSong, [name]:value})
    }
    const handleSubmit= async (e)=>{
        const updateDOcred = doc(db, "lyrics", updateSong.id);
        e.preventDefault()
        await updateDoc(updateDOcred, updateSong);
        console.log(e)
        toast.info("آهنگ شما تصحیح گردید")
    }
  return (
    <div class="songContainer">
        <form id={updateSong.id}>
            <input type="text" name='title' onChange={handleChangeUpdate} class="titleSong" placeholder="نام آهنگ" value={updateSong.title} />
            <label>متن آهنگ</label>
            <textarea name="lyric" class="lyrics" onChange={handleChangeUpdate} value={updateSong.lyric} />

        <div class="btnGroup">
            <button type="submit" onClick={handleSubmit}  class="actionBtn"  >تصحیح</button>
            <button onClick={handleDelete} class="cancelBtn">حذف</button>
        </div>
        </form>
    </div>
  )
}

export default Song
