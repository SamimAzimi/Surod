import React, {useState} from 'react'

function Song(updateSong,setUpdateSong) {
 

    const handleDelete=(id)=>{
        console.log(id)
    }
    const handleChangeUpdate=(e)=>{
         const name = e.target.name 
        const value = e.target.value 
        setUpdateSong({...updateSong, [name]:value})
    }
    const handleSubmit=(e)=>{
        
        e.preventDefault()
        console.log(e)
    }
  return (
    <div class="songContainer">
        <form id={updateSong.id}>
            <input type="text" name='title' onChange={handleChangeUpdate} class="titleSong" placeholder='نام آهنگ' value={updateSong.title} />
            <lable>متن آهنگ</lable>
            <textarea name="lyric" class="lyrics" onChange={handleChangeUpdate} value={updateSong.lyric} />

        <div class="grpBtn">
            <button type="submit" onClick={handleSubmit} >تصحیح</button>
            <button type="submit" onClick={handleDelete(updateSong.id)} >حذف</button>
        </div>
        </form>
    </div>
  )
}

export default Song