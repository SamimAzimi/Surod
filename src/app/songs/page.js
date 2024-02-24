import React, {useState }from 'react'
import {db} from '../firebaseConfig'
import { collection, addDoc} from 'firebase/firestore'
import {toast} from 'react-toastify'
function page() {
    const collectionref = collection(db, "lyrics")

  return (
    <>
    <h1>All Songs</h1>
    </>
  )
}

export default page
