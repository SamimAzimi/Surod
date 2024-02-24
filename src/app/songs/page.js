import React, useEffect from 'react'
import {db} from '../firebaseConfig'
import { collection, addDoc} from 'firebase/firestore'
import {toast} from 'react-toastify'
function page() {
    const collectionref = collection(db, "lyrics")
    const [songs,allSongs] = useState()

    useEffect(()=>{
        
    },[])

  return (
    <>
    <h1>Back To Home</h1>
    <ul>
      <li><h1></h1></li>
    </ul>
    </>
  )
}

export default page
