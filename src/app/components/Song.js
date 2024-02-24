import React from 'react'
import {db} from '../firebaseConfig'
import { doc, deleteDoc } from "firebase/firestore";
import {toast} from 'react-toastify'
function Song({updateSong}) {



    const handleDelete= async ()=>{
        await deleteDoc(doc(db, "lyrics", updateSong.id));
        toast.info("این آهنگ حذف گردید")
    }
    const handleChangeUpdate=(e)=>{
         const name = e.target.name
        const value = e.target.value
        // setUpdateSong({...updateSong, [name]:value})
    }
    const handleSubmit=(e)=>{

        e.preventDefault()
        console.log(e)
    }
  return (
    <div class="songContainer">
        <form id={updateSong.id}>
            <input type="text" name='title' onChange={handleChangeUpdate} class="titleSong" placeholder="نام آهنگ" value={updateSong.title} />
            <label>متن آهنگ</label>
            <textarea name="lyric" class="lyrics" onChange={handleChangeUpdate} value={updateSong.lyrics} />

        <div class="grpBtn">
            <button type="submit" onClick={handleSubmit} >تصحیح</button>
            <button onClick={handleDelete} >حذف</button>
        </div>
        </form>
    </div>
  )
}

export default Song
