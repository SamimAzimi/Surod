import React, {useState }from 'react'
import {ToastContainer, toast} from 'react-toastify'
function add() {
    const [song,setSong] = useState({
        
        "title": "",
        "lyric":""
    })

    const handleChange = (e)=>{
        const name = e.target.name 
        const value = e.target.value 
        setSong({...song, [name]:value})
    }
    const submit=(e)=>{
        e.preventDefault();
        
        if(song.title && song.lyric)
        {
            //submit to firestack
        }
        else
        {
            toast.info("لطفا اسم اهنگ و متن اهنگ را خالی نگذارید")
        }
    }
    const cancel=(e)=>{
        setSong(
            {"title": "",
        "lyric":""}
        )
    }
  return (
    <>
    <form class="songLyricsAdd">
        <input type="text" name='title' onChange={handleChange} class="titleSong" placeholder='نام آهنگ' value={song.title} />
        <lable>متن آهنگ</lable>
        <textarea name="lyric" class="lyrics" onChange={handleChange} value={song.lyric} />
        <div class="btnGroup">
            <button type="reset" onClick={cancel} class="cancelBtn" >لغو</button>
            <button type="submit" onClick={submit} class="actionBtn"  >ثبت</button>
        </div>
    </form>
   
    </>
  )
}

export default add