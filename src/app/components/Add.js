import React, {useState }from 'react'
import {db} from '../firebaseConfig'
import { collection, addDoc} from 'firebase/firestore'
import {toast} from 'react-toastify'
function Add() {
    const collectionref = collection(db, "lyrics")
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
            addDoc(collectionref,song).then((docRef)=>{

                console.log("Document written with ID: ", docRef.id);
                toast.info("آهنگ شما ثبت گردید")
                setSong(
                    {
                        "title": "",
                        "lyric":""
                    }
                )
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                toast.info("در جریان ثبت مشکل رخ داده است")
            });
        }
        else
        {
            toast.info("لطفا اسم اهنگ و متن اهنگ را خالی نگذارید")
        }
    }
    const cancel=(e)=>{
        setSong(
            {
                "title": "",
                "lyric":""
            }
        )
    }
  return (
    <>
    <form class="songLyricsAdd">
        <input type="text" name='title' onChange={handleChange} class="titleSong" placeholder='نام آهنگ' value={song.title} />
        <label>متن آهنگ</label>
        <textarea name="lyric" class="lyrics" onChange={handleChange} value={song.lyric} />
        <div class="btnGroup">
            <button type="reset" onClick={cancel} class="cancelBtn" >لغو</button>
            <button type="submit" onClick={submit} class="actionBtn"  >ثبت</button>
        </div>
    </form>

    </>
  )
}

export default Add
