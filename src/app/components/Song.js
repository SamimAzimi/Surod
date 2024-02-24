import React from 'react'
import { doc, deleteDoc } from "firebase/firestore";
function Song({updateSong}) {



    const handleDelete=()=>{
        await deleteDoc(doc(db, "cities", "DC"));
        console.log(updateSong.id)
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
