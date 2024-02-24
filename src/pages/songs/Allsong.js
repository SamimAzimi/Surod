import React, {useState }from 'react'
import {db} from '../../app/firebaseConfig'
import { collection, addDoc} from 'firebase/firestore'
import {toast} from 'react-toastify'
function AllSong() {
    const collectionref = collection(db, "lyrics")

  return (
    <>
    <h1>All Songs</h1>
    </>
  )
}

export default AllSong
